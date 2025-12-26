import crypto from "crypto";

import { captureWebsiteScreenshot } from "@/lib/snapshots/capture";
import { getSignedSnapshotUrl, headSnapshotObject, putSnapshotObject } from "@/lib/snapshots/r2";

export type SnapshotStatus =
  | { status: "ready"; signedUrl: string; key: string; refreshed: boolean }
  | { status: "error"; message: string };

function normalizeHttpUrl(input: string) {
  try {
    const url = new URL(input);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    url.hash = "";
    return url.toString();
  } catch {
    return null;
  }
}

export function getSnapshotKey({
  url,
  width,
  height,
}: {
  url: string;
  width: number;
  height: number;
}) {
  const normalized = normalizeHttpUrl(url);
  if (!normalized) return null;

  const hash = crypto.createHash("sha256").update(`${normalized}|${width}x${height}`).digest("hex");
  return `snapshots/${width}x${height}/${hash}.png`;
}

function isFresh(lastModified: Date | undefined, maxAgeMs: number) {
  if (!lastModified) return false;
  return Date.now() - lastModified.getTime() < maxAgeMs;
}

export async function getOrCreateSnapshot({
  url,
  width,
  height,
  maxAgeMs,
  signedUrlTtlSeconds,
  forceRefresh = false,
}: {
  url: string;
  width: number;
  height: number;
  maxAgeMs: number;
  signedUrlTtlSeconds: number;
  forceRefresh?: boolean;
}): Promise<SnapshotStatus> {
  const key = getSnapshotKey({ url, width, height });
  if (!key) {
    return { status: "error", message: "invalid url" };
  }

  const existing = await headSnapshotObject(key);
  if (!forceRefresh && existing?.lastModified && isFresh(existing.lastModified, maxAgeMs)) {
    const signedUrl = await getSignedSnapshotUrl(key, signedUrlTtlSeconds);
    return { status: "ready", signedUrl, key, refreshed: false };
  }

  const normalized = normalizeHttpUrl(url);
  if (!normalized) {
    return { status: "error", message: "invalid url" };
  }

  const screenshot = await captureWebsiteScreenshot({
    url: normalized,
    width,
    height,
  });

  await putSnapshotObject({
    key,
    body: screenshot,
  });

  const signedUrl = await getSignedSnapshotUrl(key, signedUrlTtlSeconds);
  return { status: "ready", signedUrl, key, refreshed: true };
}

