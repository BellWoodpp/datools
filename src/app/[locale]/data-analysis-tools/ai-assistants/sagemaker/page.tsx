import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { SageMakerPageContent } from "@/components/pages/ai-assistants/sagemaker-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Amazon SageMaker：托管 ML / AutoML" : "Amazon SageMaker: managed ML/AutoML",
    description: isZh
      ? "SageMaker 提供 Studio、Autopilot、训练/推理、Pipelines 与 Model Registry，支持 AWS 上的合规 MLOps。"
      : "SageMaker brings Studio, Autopilot, training/inference, Pipelines, and Model Registry for compliant MLOps on AWS.",
  };
};

export default async function LocaleSageMakerPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <SageMakerPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ai-assistants", "sagemaker"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "ai-assistants", "sagemaker"),
    },
  };
}
