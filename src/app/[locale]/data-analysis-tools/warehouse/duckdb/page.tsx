import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { DuckDBPageContent } from "@/components/pages/duckdb-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "DuckDB — 开源嵌入式列式数据库" : "DuckDB — embedded columnar database",
    description: isZh
      ? "DuckDB 零服务器、向量化执行，适合本地/嵌入式分析与数据科学工作流。"
      : "DuckDB is zero-server and vectorized, great for local/embedded analytics and data science workflows.",
  };
};

export default async function LocaleDuckDBPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <DuckDBPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "duckdb"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "warehouse", "duckdb"),
    },
  };
}
