"use client";

import { WsrvImage } from "@/components/WsrvImage";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

function isHttpUrl(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function SiteSnapshot({
  url,
  title,
  locale = "en",
}: {
  url: string;
  title: string;
  locale?: string;
}) {
  const [errored, setErrored] = useState(false);
  const validUrl = useMemo(() => isHttpUrl(url), [url]);
  const [snapshotSrc, setSnapshotSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!validUrl) {
      setSnapshotSrc(null);
      return;
    }

    const controller = new AbortController();
    setLoading(true);
    setErrored(false);

    fetch(`/api/snapshot?url=${encodeURIComponent(url)}&w=1200&h=675&locale=${encodeURIComponent(locale)}`, {
      signal: controller.signal,
    })
      .then(async (res) => {
        const payload = (await res.json().catch(() => null)) as
          | {
              ok?: boolean;
              message?: string;
              data?: { status?: string; url?: string };
            }
          | null;

        if (!res.ok) {
          throw new Error(payload?.message ?? "snapshot failed");
        }

        const nextUrl = payload?.data?.url;
        if (!nextUrl) {
          throw new Error("snapshot unavailable");
        }

        setSnapshotSrc(nextUrl);
      })
      .catch((error) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setSnapshotSrc(null);
        setErrored(true);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [locale, url, validUrl]);

  const fallbackText =
    locale === "zh"
      ? "暂无网站快照（可点击访问官网）"
      : locale === "ja"
        ? "サイトのスナップショットを取得できません（公式サイトへ）"
        : "Snapshot unavailable (open the official site)";

  return (
    <section className="overflow-hidden rounded-2xl border border-[#1e5bff]/25 bg-[#0b162e]/70 shadow-[0_20px_50px_-24px_rgba(18,194,233,0.45)]">
      <div className="flex items-center justify-between gap-3 border-b border-[#1e5bff]/20 px-5 py-3">
        <div className="min-w-0">
          <div className="text-sm font-semibold text-slate-100">{title}</div>
          <div className="truncate text-xs text-slate-400">{url}</div>
        </div>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-[#1e5bff]/25 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
        >
          {locale === "zh" ? "访问官网" : locale === "ja" ? "公式サイト" : "Open site"}
        </Link>
      </div>

      <div className="relative aspect-[16/9] w-full bg-gradient-to-b from-[#0f172a] to-[#0a0f1f]">
        {!snapshotSrc || errored ? (
          <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm text-slate-300">
            {loading
              ? locale === "zh"
                ? "正在生成快照…"
                : locale === "ja"
                  ? "スナップショットを生成中…"
                  : "Generating snapshot…"
              : fallbackText}
          </div>
        ) : (
          <WsrvImage
            src={snapshotSrc}
            alt={title}
            layout="fullWidth"
            aspectRatio={16 / 9}
            unstyled
            className="absolute inset-0 h-full w-full object-cover"
            sizes="(min-width: 1024px) 896px, 100vw"
            loading="lazy"
            onError={() => setErrored(true)}
          />
        )}
      </div>
    </section>
  );
}
