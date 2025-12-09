import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { LightdashPageContent } from "@/components/pages/visualization/lightdash-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Lightdash — 面向 dbt 的开源 BI" : "Lightdash — open-source BI for dbt",
    description: isZh
      ? "Lightdash 直接读取 dbt 模型提供 Looker 风格探索与仪表板，支持自托管与云版本。"
      : "Lightdash reads dbt models to deliver Looker-style explores and dashboards, with self-hosted and cloud options.",
  };
};

export default async function LocaleLightdashPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <LightdashPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "lightdash"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "visualization", "lightdash"),
    },
  };
}
