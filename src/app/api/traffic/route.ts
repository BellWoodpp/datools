import { NextRequest, NextResponse } from "next/server";

import { auth } from "@/lib/auth-server/auth";
import { TRAFFIC_CHECKOUT_PRODUCT_ID, hasTrafficEntitlement } from "@/lib/entitlements/traffic";

type TrafficData =
  | {
      status: "available";
      visits: number;
      period: "monthly";
      source: string;
      updatedAt: string;
    }
  | {
      status: "not_configured" | "error";
      message: string;
    };

type CacheEntry = {
  expiresAt: number;
  data: TrafficData;
};

declare global {
  var __datoolsTrafficCache: Map<string, CacheEntry> | undefined;
}

function getCache() {
  globalThis.__datoolsTrafficCache ??= new Map<string, CacheEntry>();
  return globalThis.__datoolsTrafficCache;
}

function respErr(message: string, status = 400, extra?: Record<string, unknown>) {
  return NextResponse.json({ ok: false, message, ...(extra ?? {}) }, { status });
}

function respData<T>(data: T, status = 200) {
  return NextResponse.json({ ok: true, data }, { status });
}

function normalizeOrigin(input: string) {
  try {
    const url = new URL(input);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.origin;
  } catch {
    return null;
  }
}

function getNotConfiguredMessage(locale: string) {
  const normalized = locale.toLowerCase();
  const messages: Record<string, string> = {
    en: "Traffic data source is not configured (requires a third-party API key).",
    zh: "未配置访问量数据源（需要在服务端配置第三方 API Key）",
    es: "La fuente de datos de tráfico no está configurada (requiere una API key de terceros).",
    fr: "La source de données de trafic n’est pas configurée (nécessite une clé API tierce).",
    de: "Traffic-Datenquelle ist nicht konfiguriert (benötigt einen API-Key eines Drittanbieters).",
    pt: "A fonte de dados de tráfego não está configurada (requer uma API key de terceiros).",
    id: "Sumber data traffic belum dikonfigurasi (memerlukan API key pihak ketiga).",
    ja: "トラフィックデータソースが未設定です（サードパーティの API キーが必要です）。",
    ru: "Источник данных о трафике не настроен (требуется сторонний API‑ключ).",
    ar: "مصدر بيانات حركة المرور غير مُهيأ (يتطلب مفتاح API من طرف ثالث).",
  };

  return messages[normalized] ?? messages.en;
}

async function getTrafficData(origin: string, locale: string): Promise<TrafficData> {
  const login = process.env.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD;

  if (!login || !password) {
    return {
      status: "not_configured",
      message: getNotConfiguredMessage(locale),
    };
  }

  let hostname: string;
  try {
    hostname = new URL(origin).hostname;
  } catch {
    return {
      status: "error",
      message: "invalid url",
    };
  }

  const locationCode = Number(process.env.DATAFORSEO_LOCATION_CODE ?? 2840);
  const languageCode = process.env.DATAFORSEO_LANGUAGE_CODE ?? "en";
  const includePaid = (process.env.DATAFORSEO_INCLUDE_PAID ?? "true") === "true";

  const basicAuth = Buffer.from(`${login}:${password}`).toString("base64");
  const response = await fetch("https://api.dataforseo.com/v3/dataforseo_labs/google/bulk_traffic_estimation/live", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${basicAuth}`,
    },
    body: JSON.stringify([
      {
        targets: [hostname],
        location_code: locationCode,
        language_code: languageCode,
        item_types: includePaid ? ["organic", "paid"] : ["organic"],
      },
    ]),
  });

  if (!response.ok) {
    return {
      status: "error",
      message: `traffic provider error: ${response.status}`,
    };
  }

  const payload = (await response.json().catch(() => null)) as
    | {
        status_code?: number;
        status_message?: string;
        tasks?: Array<{
          status_code?: number;
          status_message?: string;
          result?: Array<{
            items?: Array<{
              target?: string;
              metrics?: {
                organic?: { etv?: number };
                paid?: { etv?: number };
              };
            }>;
          }>;
        }>;
      }
    | null;

  const task = payload?.tasks?.[0];
  const item = task?.result?.[0]?.items?.find((candidate) => candidate.target === hostname);
  const organicEtv = item?.metrics?.organic?.etv ?? 0;
  const paidEtv = includePaid ? item?.metrics?.paid?.etv ?? 0 : 0;
  const visits = Math.max(0, Math.round(organicEtv + paidEtv));

  if (!visits) {
    return {
      status: "error",
      message: payload?.status_message ?? task?.status_message ?? "no traffic data",
    };
  }

  return {
    status: "available",
    visits,
    period: "monthly",
    source: "dataforseo_labs_google_etv",
    updatedAt: new Date().toISOString(),
  };
}

export async function GET(req: NextRequest) {
  const session = await auth.api.getSession({ headers: req.headers });
  const userId = session?.user?.id;
  if (!userId) {
    return respErr("no auth, please sign-in", 401, { code: "NO_AUTH" });
  }

  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  const locale = searchParams.get("locale") ?? "en";
  if (!url) {
    return respErr("invalid params: url");
  }

  const origin = normalizeOrigin(url);
  if (!origin) {
    return respErr("invalid params: url");
  }

  const entitled = await hasTrafficEntitlement(userId);
  if (!entitled) {
    return respErr("payment required", 402, {
      code: "PAYWALL",
      productId: TRAFFIC_CHECKOUT_PRODUCT_ID,
    });
  }

  const cache = getCache();
  const cached = cache.get(origin);
  if (cached && cached.expiresAt > Date.now()) {
    return respData(cached.data);
  }

  const data = await getTrafficData(origin, locale);
  cache.set(origin, {
    data,
    expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 7,
  });

  return respData(data);
}
