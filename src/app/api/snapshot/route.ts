import { NextRequest, NextResponse } from "next/server";

import { getSnapshotKey, getOrCreateSnapshot } from "@/lib/snapshots/service";
import { headSnapshotObject } from "@/lib/snapshots/r2";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

function respErr(message: string, status = 400, extra?: Record<string, unknown>) {
  return NextResponse.json({ ok: false, message, ...(extra ?? {}) }, { status });
}

function respData<T>(data: T, status = 200) {
  return NextResponse.json({ ok: true, data }, { status });
}

function isAllowedOrigin(req: NextRequest) {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  try {
    return origin === new URL(req.url).origin;
  } catch {
    return true;
  }
}

type RateState = { count: number; resetAt: number };
declare global {
  var __datoolsSnapshotRate: Map<string, RateState> | undefined;
}

function getRateMap() {
  globalThis.__datoolsSnapshotRate ??= new Map<string, RateState>();
  return globalThis.__datoolsSnapshotRate;
}

function getClientIp(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
}

function consumeRateLimit(req: NextRequest, maxPerHour: number) {
  const ip = getClientIp(req);
  const now = Date.now();
  const map = getRateMap();
  const existing = map.get(ip);
  if (!existing || existing.resetAt <= now) {
    map.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return { ok: true };
  }
  if (existing.count >= maxPerHour) {
    return { ok: false, retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)) };
  }
  existing.count += 1;
  map.set(ip, existing);
  return { ok: true };
}

export async function GET(req: NextRequest) {
  if (!isAllowedOrigin(req)) {
    return respErr("forbidden", 403);
  }

  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  if (!url) {
    return respErr("invalid params: url");
  }

  const width = Math.min(1600, Math.max(600, Number(searchParams.get("w") ?? "1200") || 1200));
  const height = Math.min(1200, Math.max(500, Number(searchParams.get("h") ?? "675") || 675));
  const locale = searchParams.get("locale") ?? "en";

  const maxAgeMs = 7 * 24 * 60 * 60 * 1000;
  const signedUrlTtlSeconds = 10 * 60;

  const secret = process.env.SNAPSHOT_REFRESH_SECRET;
  const provided = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const canForceRefresh = Boolean(secret && provided && provided === secret);
  const forceRefresh = searchParams.get("force") === "1" && canForceRefresh;

  const key = getSnapshotKey({ url, width, height });
  const existing = key ? await headSnapshotObject(key) : null;
  const isFresh =
    existing?.lastModified ? Date.now() - existing.lastModified.getTime() < maxAgeMs : false;
  const needsRefresh = forceRefresh || !existing || !isFresh;
  if (needsRefresh) {
    const rate = consumeRateLimit(req, 20);
    if (!rate.ok) {
      return respErr("rate limited", 429, { retryAfterSeconds: rate.retryAfterSeconds });
    }
  }

  try {
    const snapshot = await getOrCreateSnapshot({
      url,
      width,
      height,
      maxAgeMs,
      signedUrlTtlSeconds,
      forceRefresh,
    });

    if (snapshot.status === "error") {
      return respErr(snapshot.message, 400);
    }

    return respData({
      status: "ready",
      url: snapshot.signedUrl,
      key: snapshot.key,
      refreshed: snapshot.refreshed,
      locale,
    });
  } catch (error) {
    return respErr((error as Error)?.message ?? "snapshot failed", 500);
  }
}
