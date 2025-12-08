import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { DatabricksAutoMLPageContent } from "@/components/pages/databricks-automl-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Databricks AutoML：Lakehouse 自动建模" : "Databricks AutoML: Lakehouse automation",
    description: isZh
      ? "自动生成可编辑 Notebook、特征工程与 MLflow 部署，适合基于 Delta/Unity Catalog 的 AutoML 场景。"
      : "Auto-generates editable notebooks, feature engineering, and MLflow deployments for AutoML on Delta/Unity Catalog.",
  };
};

export default async function LocaleDatabricksAutoMLPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <DatabricksAutoMLPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "AI-assistants", "databricks-automl"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "AI-assistants", "databricks-automl"),
    },
  };
}
