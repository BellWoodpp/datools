import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { DataRobotPageContent } from "@/components/pages/ai-assistants/datarobot-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "DataRobot：企业级 AutoML 与 MLOps" : "DataRobot: enterprise AutoML & MLOps",
    description: isZh
      ? "DataRobot 支持自动特征工程、模型搜索与部署监控，适合有治理要求的多云/本地场景。"
      : "DataRobot provides automated feature engineering, model search, and monitored deployments for cloud and on-prem teams with governance needs.",
  };
};

export default async function LocaleDataRobotPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <DataRobotPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ai-assistants", "datarobot"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "ai-assistants", "datarobot"),
    },
  };
}
