import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { DbtTestsPageContent } from "@/components/pages/governance/dbt-tests-content";
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
      ? "dbt tests — 模型级数据质量校验"
      : isJa
        ? "dbt tests — モデルレベルの品質検証"
        : "dbt tests — Model-level data quality",
    description: isZh
      ? "通过内置或自定义测试对 dbt 模型进行数据质量校验，并生成文档或集成 CI。"
      : isJa
        ? "組み込み/カスタムテストで dbt モデルのデータ品質を検証し、ドキュメント化や CI 統合を行います。"
        : "Built-in and custom dbt tests for model-level data quality with docs and CI integration.",
  };
};

export default async function LocaleDbtTestsPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <DbtTestsPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "governance", "dbt-tests"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "governance", "dbt-tests"),
    },
  };
}

