import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { BigeyePageContent } from "@/components/pages/bigeye-content";
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
      ? "Bigeye — 数据质量监控"
      : isJa
        ? "Bigeye — データ品質モニタリング"
        : "Bigeye — Data quality monitoring",
    description: isZh
      ? "Bigeye 提供自助规则、SLA、异常检测与告警的质量监控平台。"
      : isJa
        ? "Bigeye はセルフサービスのルール設定、SLA、異常検知とアラートを備えたデータ品質モニタリングを提供します。"
        : "Bigeye provides data quality monitoring with self-serve rules, SLAs, anomaly detection, and alerting.",
  };
};

export default async function LocaleBigeyePage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <BigeyePageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "governance", "bigeye"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "governance", "bigeye"),
    },
  };
}

