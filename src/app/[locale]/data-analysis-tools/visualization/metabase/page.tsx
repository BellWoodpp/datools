import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { MetabasePageContent } from "@/components/pages/visualization/metabase-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Metabase — 开源自助式 BI" : "Metabase — open-source self-service BI",
    description: isZh
      ? "Metabase 提供零门槛问答、SQL、仪表板与告警，开源且易自托管，适合团队快速搭建 BI。"
      : "Metabase offers GUI/SQL questions, dashboards, and alerts; open-source and easy to self-host for quick team BI.",
  };
};

export default async function LocaleMetabasePage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <MetabasePageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "metabase"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "visualization", "metabase"),
    },
  };
}
