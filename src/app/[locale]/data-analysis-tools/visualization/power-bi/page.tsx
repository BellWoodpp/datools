import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { PowerBIPageContent } from "@/components/pages/power-bi-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Power BI — 微软自助式 BI 与可视化" : "Power BI — Microsoft self-service BI & visualization",
    description: isZh
      ? "Power BI 提供 Power Query 清洗、DAX 语义模型与交互式仪表板，连接本地与云端多源数据，深度集成 Microsoft 生态。"
      : "Power BI delivers Power Query prep, DAX semantic models, and interactive dashboards with on-prem and cloud connectors, integrated with the Microsoft stack.",
  };
};

export default async function LocalePowerBIPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <PowerBIPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "power-bi"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "visualization", "power-bi"),
    },
  };
}
