import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { MonteCarloPageContent } from "@/components/pages/governance/monte-carlo-content";
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
      ? "Monte Carlo — 数据可观测性"
      : isJa
        ? "Monte Carlo — データオブザーバビリティ"
        : "Monte Carlo — Data observability",
    description: isZh
      ? "Monte Carlo 提供数据质量、血缘、SLA 与影响告警的可观测平台。"
      : isJa
        ? "Monte Carlo はデータ品質、血統、SLA、影響アラートを備えたデータオブザーバビリティを提供します。"
        : "Monte Carlo provides data observability for data quality, lineage, SLAs, and impact alerts across pipelines.",
  };
};

export default async function LocaleMonteCarloPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <MonteCarloPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "governance", "monte-carlo"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "governance", "monte-carlo"),
    },
  };
}

