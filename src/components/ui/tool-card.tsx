'use client'

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Lock, MessageSquare, TrendingUp } from "lucide-react";
import type { HomeFeedTool } from "@/i18n/types";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, usePayment } from "@/hooks";
import { authClient } from "@/lib/auth-server/client";

function highlightText(text: string, term: string) {
  if (!term) return text;
  const escaped = term.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "ig");
  return text.split(regex).map((part, index) =>
    part.toLowerCase() === term.toLowerCase() ? (
      <span key={`${part}-${index}`} className="text-red-500">
        {part}
      </span>
    ) : (
      <span key={`${part}-${index}-plain`}>{part}</span>
    ),
  );
}

interface ToolCardProps {
  tool: HomeFeedTool;
  highlightTerm?: string;
  detailHref: string;
  officialHref?: string;
  detailLabel?: string;
}

export function ToolCard({
  tool,
  highlightTerm = "",
  detailHref,
  officialHref = "#",
  detailLabel = "View details",
}: ToolCardProps) {
  const isExternal = /^https?:\/\//i.test(officialHref);
  const [logoError, setLogoError] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);
  const router = useRouter();
  const { locale, dictionary } = useLocale();
  const { createCheckout, isLoading: isCheckoutLoading } = usePayment();
  const session = authClient.useSession();
  const isAuthenticated = Boolean(session.data?.user);
  const showDetailLink = detailHref && detailHref !== "#";
  const homeFeedCopy = dictionary.homeFeed;
  const trafficLabel = homeFeedCopy?.trafficLabel ?? (locale === "zh" ? "访问量" : "Traffic");
  const trafficLoginUnlockLabel =
    homeFeedCopy?.trafficLoginUnlockLabel ?? (locale === "zh" ? "登录解锁" : "Log in to unlock");
  const trafficUpgradeUnlockLabel =
    homeFeedCopy?.trafficUpgradeUnlockLabel ?? (locale === "zh" ? "升级解锁" : "Upgrade to unlock");
  const trafficNotConfiguredLabel =
    homeFeedCopy?.trafficNotConfiguredLabel ?? (locale === "zh" ? "未配置" : "Not configured");
  const trafficPerMonthSuffix = homeFeedCopy?.trafficPerMonthSuffix ?? (locale === "zh" ? "/ 月" : "/ mo");
  const loginHref = useMemo(
    () => (locale === "en" ? "/login" : `/${locale}/login`),
    [locale],
  );

  const renderLogo = () => {
    const defaultLogo = "https://r2.datools.org/logo_light.svg";
    const fromConfig = tool.logo ?? tool.image;
    // 只使用配置的 logo/image，未提供时退回默认图，不再尝试自动抓取站点 favicon
    const primaryLogo = fromConfig ?? defaultLogo;
    const logoSrc = fallbackError
      ? undefined
      : (!logoError && primaryLogo) || defaultLogo;
    const needsLightBg =
      typeof primaryLogo === "string" &&
      /thoughtspot/i.test(primaryLogo);

    if (logoSrc && !logoError) {
      return (
        <div
          className={`relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-lg border border-[#1e5bff]/40 ${
            needsLightBg ? "bg-white" : "bg-[#0f1f3f]"
          }`}
        >
          <Image
            src={logoSrc}
            alt={tool.name}
            fill
            sizes="36px"
            className="object-contain p-1.5"
            unoptimized
            onError={() => {
              // 失败时切换到默认图，默认图再失败则用内置 SVG
              if (logoSrc !== defaultLogo) {
                setLogoError(true);
                return;
              }
              setFallbackError(true);
            }}
          />
        </div>
      );
    }

    return (
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-[#1e5bff]/30 bg-[#0f1f3f]">
        <ReactGlyph />
      </div>
    );
  };

  const handleNavigateDetail = () => {
    if (!detailHref || detailHref === "#") return;
    router.push(detailHref);
  };

  type TrafficState =
    | { status: "loading" }
    | { status: "unauth" }
    | { status: "locked"; productId: string }
    | { status: "available"; label: string }
    | { status: "not_configured"; message: string }
    | { status: "error"; message: string };

  const [traffic, setTraffic] = useState<TrafficState>({ status: "loading" });
  const trafficUrl = useMemo(() => (isExternal ? officialHref : null), [isExternal, officialHref]);

  useEffect(() => {
    if (!isAuthenticated) {
      setTraffic({ status: "unauth" });
      return;
    }

    if (!trafficUrl || trafficUrl === "#") {
      setTraffic({ status: "error", message: "no url" });
      return;
    }

    const controller = new AbortController();
    setTraffic({ status: "loading" });

    fetch(`/api/traffic?url=${encodeURIComponent(trafficUrl)}&locale=${encodeURIComponent(locale)}`, {
      signal: controller.signal,
    })
      .then(async (res) => {
        const payload = (await res.json().catch(() => null)) as
          | {
              ok?: boolean;
              message?: string;
              code?: string;
              productId?: string;
              data?: {
                status: string;
                visits?: number;
                period?: string;
                source?: string;
                updatedAt?: string;
                message?: string;
              };
            }
          | null;

        if (!res.ok) {
          if (res.status === 401) {
            setTraffic({ status: "unauth" });
            return;
          }
          if (res.status === 402) {
            setTraffic({ status: "locked", productId: payload?.productId ?? "professional" });
            return;
          }
          setTraffic({ status: "error", message: payload?.message ?? "load failed" });
          return;
        }

        const data = payload?.data;
        if (!data || !data.status) {
          setTraffic({ status: "error", message: "invalid data" });
          return;
        }

        if (data.status === "available" && typeof data.visits === "number") {
          setTraffic({ status: "available", label: `${data.visits.toLocaleString(locale)} ${trafficPerMonthSuffix}` });
          return;
        }

        if (data.status === "not_configured") {
          setTraffic({ status: "not_configured", message: data.message ?? "not configured" });
          return;
        }

        setTraffic({ status: "error", message: data.message ?? "unknown status" });
      })
      .catch((error) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setTraffic({ status: "error", message: (error as Error)?.message ?? "load failed" });
      });

    return () => controller.abort();
  }, [trafficUrl, isAuthenticated]);

  const handleTrafficClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (traffic.status === "unauth") {
      router.push(loginHref);
      return;
    }

    if (traffic.status === "locked") {
      await createCheckout(traffic.productId, { period: "monthly", locale });
      return;
    }

    if (trafficUrl) {
      setTraffic({ status: "loading" });
      const controller = new AbortController();
      fetch(`/api/traffic?url=${encodeURIComponent(trafficUrl)}&locale=${encodeURIComponent(locale)}`, { signal: controller.signal })
        .then(async (res) => {
          const payload = (await res.json().catch(() => null)) as
            | {
                ok?: boolean;
                message?: string;
                productId?: string;
                data?: {
                  status: string;
                  visits?: number;
                  message?: string;
                };
              }
            | null;

          if (!res.ok) {
            if (res.status === 401) {
              setTraffic({ status: "unauth" });
              return;
            }
            if (res.status === 402) {
              setTraffic({ status: "locked", productId: payload?.productId ?? "professional" });
              return;
            }
            setTraffic({ status: "error", message: payload?.message ?? "load failed" });
            return;
          }

          const data = payload?.data;
          if (data?.status === "available" && typeof data.visits === "number") {
            setTraffic({ status: "available", label: `${data.visits.toLocaleString(locale)} ${trafficPerMonthSuffix}` });
            return;
          }
          if (data?.status === "not_configured") {
            setTraffic({ status: "not_configured", message: data.message ?? "not configured" });
            return;
          }
          setTraffic({ status: "error", message: data?.message ?? "unknown status" });
        })
        .catch(() => setTraffic({ status: "error", message: "load failed" }));
    }
  };

  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={handleNavigateDetail}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleNavigateDetail();
        }
      }}
      className="overflow-hidden border border-[#1e5bff]/30 bg-[#0b162e]/90 shadow-[0_15px_40px_-18px_rgba(30,91,255,0.65)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(18,194,233,0.7)] focus:outline-none focus:ring-2 focus:ring-[#1e5bff]/60 focus:ring-offset-2 focus:ring-offset-[#0b162e] cursor-pointer"
    >
      {tool.image ? (
        <div className="relative h-40 w-full bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={tool.image}
            alt={tool.name}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
            priority={false}
            unoptimized
          />
        </div>
      ) : null}
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            {renderLogo()}
            <div>
              <Link
                href={officialHref}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                onClick={(e) => e.stopPropagation()}
                className="group inline-flex items-center gap-1 text-lg font-semibold text-slate-100 transition hover:text-[#f8a13c]"
              >
                <CardTitle className="m-0 inline-flex items-center gap-1 text-inherit">
                  <span className="text-left">{highlightText(tool.name, highlightTerm)}</span>
                  <ExternalLink className="h-4 w-4 text-[#12c2e9] transition group-hover:text-[#f8a13c]" />
                </CardTitle>
              </Link>
              <p className="text-sm text-slate-300">
                {highlightText(tool.summary, highlightTerm)}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 text-right">
            <div className="text-sm font-semibold text-[#12c2e9]">
              {highlightText(tool.pricing, highlightTerm)}
            </div>
            <button
              type="button"
              onClick={handleTrafficClick}
              disabled={isCheckoutLoading}
              className="group inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-slate-200/90 transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#1e5bff]/60 focus:ring-offset-2 focus:ring-offset-[#0b162e] disabled:opacity-60"
              aria-label={trafficLabel}
              title={
                traffic.status === "not_configured"
                  ? traffic.message
                : traffic.status === "error"
                    ? traffic.message
                    : undefined
              }
            >
              <TrendingUp className="h-3.5 w-3.5 text-[#12c2e9]" />
              <span className="text-slate-300">{trafficLabel}</span>
              {traffic.status === "loading" ? (
                <span className="text-slate-400">…</span>
              ) : traffic.status === "available" ? (
                <span className="text-[#f8a13c]">{traffic.label}</span>
              ) : traffic.status === "unauth" ? (
                <span className="inline-flex items-center gap-1 text-slate-400">
                  <Lock className="h-3.5 w-3.5" />
                  {trafficLoginUnlockLabel}
                </span>
              ) : traffic.status === "locked" ? (
                <span className="inline-flex items-center gap-1 text-slate-400">
                  <Lock className="h-3.5 w-3.5" />
                  {trafficUpgradeUnlockLabel}
                </span>
              ) : traffic.status === "not_configured" ? (
                <span className="text-slate-400">{trafficNotConfiguredLabel}</span>
              ) : (
                <span className="text-slate-400">—</span>
              )}
            </button>
            <div className="text-sm font-semibold text-slate-100">
              <div className="text-[#f8a13c]">▲ {tool.votes}</div>
              <div className="text-xs text-slate-400">
                <MessageSquare className="mr-1 inline-block h-4 w-4 align-middle" />
                {tool.comments}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {highlightText(tag, highlightTerm)}
            </Badge>
          ))}
          <Badge variant="outline">{highlightText(tool.deployment, highlightTerm)}</Badge>
        </div>
      </CardHeader>

      {showDetailLink ? (
        <CardContent className="px-6 pb-6 pt-0">
          <Link
            href={detailHref}
            onClick={(e) => e.stopPropagation()}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#12c2e9] transition hover:text-[#f8a13c] focus:outline-none focus:ring-2 focus:ring-[#1e5bff]/60 focus:ring-offset-2 focus:ring-offset-[#0b162e]"
          >
            <span>{detailLabel}</span>
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </CardContent>
      ) : null}
    </Card>
  );
}

function ReactGlyph() {
  return (
    <svg viewBox="0 0 256 256" className="h-6 w-6 text-[#61dafb]" role="img" aria-label="React logo">
      <g fill="none" stroke="currentColor" strokeWidth="16">
        <circle cx="128" cy="128" r="24" />
        <ellipse cx="128" cy="128" rx="92" ry="36" />
        <ellipse cx="128" cy="128" rx="92" ry="36" transform="rotate(60 128 128)" />
        <ellipse cx="128" cy="128" rx="92" ry="36" transform="rotate(120 128 128)" />
      </g>
    </svg>
  );
}
