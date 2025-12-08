import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { StatsigPageContent } from "@/components/pages/statsig-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  const isJa = locale === "ja";
  return {
    title: isZh
      ? "Statsig — 实验与特性管理"
      : isJa
        ? "Statsig — 実験とフィーチャー管理"
        : "Statsig — Experimentation & feature management",
    description: isZh
      ? "Statsig 提供统计引擎、特性开关、指标与快速回滚，面向产品与工程团队。"
      : isJa
        ? "Statsig は統計エンジン、フィーチャーフラグ、指標、迅速なロールバックを備え、プロダクト/エンジニアリングチームを支援します。"
        : "Product experimentation and feature management with stats engine, feature flags, metrics, and fast rollback.",
  };
};

export default async function LocaleStatsigPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <StatsigPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "attribution", "statsig"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "attribution", "statsig"),
    },
  };
}

