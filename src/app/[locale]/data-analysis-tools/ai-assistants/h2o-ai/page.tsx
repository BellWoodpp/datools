import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { H2OAIPageContent } from "@/components/pages/ai-assistants/h2oai-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "H2O.ai：开源 + Driverless AutoML" : "H2O.ai: open-source + Driverless AutoML",
    description: isZh
      ? "H2O-3 与 Driverless AI 提供自动特征工程、可解释性与 MLOps，适合自托管或云端。"
      : "H2O-3 and Driverless AI offer automated feature engineering, explainability, and MLOps for self-hosted or cloud deployments.",
  };
};

export default async function LocaleH2OAIPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <H2OAIPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ai-assistants", "h2o-ai"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "ai-assistants", "h2o-ai"),
    },
  };
}
