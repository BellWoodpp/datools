import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { VertexAIPageContent } from "@/components/pages/ai-assistants/vertex-ai-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Vertex AI：统一的 ML / AutoML / GenAI 平台" : "Vertex AI: unified ML/AutoML/GenAI",
    description: isZh
      ? "Vertex AI 集成 AutoML、生成式模型、Pipelines、特征库与监控，适合在 GCP 上构建端到端 ML。"
      : "Vertex AI combines AutoML, generative models, Pipelines, Feature Store, and monitoring for end-to-end ML on GCP.",
  };
};

export default async function LocaleVertexAIPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <VertexAIPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ai-assistants", "vertex-ai"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "ai-assistants", "vertex-ai"),
    },
  };
}
