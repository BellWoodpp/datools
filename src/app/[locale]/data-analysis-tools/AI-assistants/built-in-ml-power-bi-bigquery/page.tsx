import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { BuiltInMlPageContent } from "@/components/pages/built-in-ml-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "内置 ML（Power BI / BigQuery）：就地 AutoML" : "Built-in ML (Power BI / BigQuery): in-place AutoML",
    description: isZh
      ? "Power BI 数据流 AutoML 与 BigQuery ML 支持低代码/SQL 建模，预测可直接用于报表与下游表。"
      : "Power BI dataflows AutoML and BigQuery ML enable low-code/SQL modeling with predictions ready for reports and downstream tables.",
  };
};

export default async function LocaleBuiltInMlPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <BuiltInMlPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "AI-assistants", "built-in-ml-power-bi-bigquery"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "AI-assistants", "built-in-ml-power-bi-bigquery"),
    },
  };
}
