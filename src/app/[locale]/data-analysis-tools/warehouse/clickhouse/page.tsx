import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { ClickHousePageContent } from "@/components/pages/warehouse/clickhouse-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "ClickHouse — 开源实时分析数据库" : "ClickHouse — open-source real-time analytics DB",
    description: isZh
      ? "ClickHouse 提供列式存储与高性能查询，适合日志、监控与实时产品分析，可自托管或云服务。"
      : "ClickHouse provides columnar storage and high-speed queries for logs, monitoring, and real-time analytics, self-hosted or cloud.",
  };
};

export default async function LocaleClickHousePage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <ClickHousePageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "clickhouse"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "warehouse", "clickhouse"),
    },
  };
}
