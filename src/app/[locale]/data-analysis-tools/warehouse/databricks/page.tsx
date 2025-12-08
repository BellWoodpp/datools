import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { DatabricksPageContent } from "@/components/pages/databricks-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Databricks — Lakehouse 平台" : "Databricks — Lakehouse platform",
    description: isZh
      ? "Databricks 基于 Delta Lake、Spark、MLflow 与 SQL Warehouse，统一湖仓与 AI 工作负载。"
      : "Databricks unifies lake and warehouse workloads with Delta Lake, Spark, MLflow, and SQL Warehouse for data/AI.",
  };
};

export default async function LocaleDatabricksPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <DatabricksPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "databricks"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "warehouse", "databricks"),
    },
  };
}
