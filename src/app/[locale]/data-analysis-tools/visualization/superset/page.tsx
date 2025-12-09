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
    title: isZh ? "Apache Superset — 开源 BI 与可视化" : "Apache Superset — open-source BI & visualization",
    description: isZh
      ? "Superset 提供 SQL Lab、仪表板与权限管理，开源可自托管并支持云原生部署。"
      : "Superset offers SQL Lab, dashboards, and permissions in an open-source, self-hostable and cloud-friendly BI platform.",
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
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "superset"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "visualization", "superset"),
    },
  };
}
