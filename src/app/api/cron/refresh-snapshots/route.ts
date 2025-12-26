import { NextRequest, NextResponse } from "next/server";

import { getDictionary } from "@/i18n";
import { getOrCreateSnapshot } from "@/lib/snapshots/service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

function respErr(message: string, status = 400, extra?: Record<string, unknown>) {
  return NextResponse.json({ ok: false, message, ...(extra ?? {}) }, { status });
}

function respData<T>(data: T, status = 200) {
  return NextResponse.json({ ok: true, data }, { status });
}

function isAuthorized(req: NextRequest) {
  if (req.headers.get("x-vercel-cron") === "1") return true;
  const secret = process.env.SNAPSHOT_REFRESH_SECRET;
  const provided = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  return Boolean(secret && provided && provided === secret);
}

async function runPool<T>(
  items: T[],
  concurrency: number,
  handler: (item: T) => Promise<void>,
) {
  let index = 0;
  const workers = Array.from({ length: Math.max(1, concurrency) }).map(async () => {
    while (index < items.length) {
      const current = items[index];
      index += 1;
      await handler(current);
    }
  });
  await Promise.all(workers);
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return respErr("forbidden", 403);
  }

  const dict = getDictionary("en");
  const urls = (dict.homeFeed?.tools ?? [])
    .map((tool) => tool.officialUrl)
    .filter((value): value is string => Boolean(value));

  const uniqueUrls = Array.from(new Set(urls));

  const width = 1200;
  const height = 675;
  const maxAgeMs = 7 * 24 * 60 * 60 * 1000;
  const signedUrlTtlSeconds = 60;

  let refreshed = 0;
  let failed = 0;
  const errors: Array<{ url: string; error: string }> = [];

  await runPool(uniqueUrls, 2, async (url) => {
    try {
      const result = await getOrCreateSnapshot({
        url,
        width,
        height,
        maxAgeMs,
        signedUrlTtlSeconds,
        forceRefresh: true,
      });
      if (result.status === "ready" && result.refreshed) {
        refreshed += 1;
      }
      if (result.status === "error") {
        failed += 1;
        errors.push({ url, error: result.message });
      }
    } catch (error) {
      failed += 1;
      errors.push({ url, error: (error as Error)?.message ?? "unknown error" });
    }
  });

  return respData({
    total: uniqueUrls.length,
    refreshed,
    failed,
    errors: errors.slice(0, 20),
  });
}

