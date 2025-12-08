import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { LookerPageContent } from "@/components/pages/looker-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Looker — LookML 语义层与可视化" : "Looker — LookML semantic layer & analytics",
    description: isZh
      ? "Looker 提供 LookML 语义层、仪表板、嵌入式分析与权限治理，适合统一指标与内嵌分析场景。"
      : "Looker delivers a LookML semantic layer, dashboards, embedded analytics, and governance for unified metrics and product embeds.",
  };
};

export default async function LocaleLookerPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <LookerPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "looker"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "visualization", "looker"),
    },
  };
}
