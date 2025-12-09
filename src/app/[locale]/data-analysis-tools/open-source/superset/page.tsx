import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { SupersetPageContent } from "@/components/pages/visualization/superset-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Apache Superset：开源 BI" : "Apache Superset: open-source BI",
    description: isZh
      ? "Superset 提供 SQL Lab、可视化与权限控制，可自托管并扩展插件。"
      : "Superset delivers SQL Lab, visualizations, and permissions for self-hosted BI with plugins.",
  };
};

export default async function LocaleSupersetPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <SupersetPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "superset"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "open-source", "superset"),
    },
  };
}
