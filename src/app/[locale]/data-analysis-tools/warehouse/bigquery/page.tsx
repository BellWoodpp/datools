import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { BigQueryPageContent } from "@/components/pages/warehouse/bigquery-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "BigQuery — 无服务器云数据仓库" : "BigQuery — serverless cloud warehouse",
    description: isZh
      ? "BigQuery 提供存算分离、联邦查询与 BI Engine 加速，适合高并发 BI 与流式分析。"
      : "BigQuery offers storage/compute separation, federation, and BI Engine acceleration for high-concurrency BI and streaming analytics.",
  };
};

export default async function LocaleBigQueryPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <BigQueryPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "bigquery"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "warehouse", "bigquery"),
    },
  };
}
