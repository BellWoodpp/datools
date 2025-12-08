import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { RedshiftPageContent } from "@/components/pages/redshift-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Amazon Redshift — 云数据仓库" : "Amazon Redshift — cloud warehouse",
    description: isZh
      ? "Redshift 支持 RA3 存算分离与 Spectrum 联邦查询，兼容 PostgreSQL，适合 AWS 生态。"
      : "Redshift supports RA3 separation and Spectrum federation, PostgreSQL-compatible for AWS-native warehousing.",
  };
};

export default async function LocaleRedshiftPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <RedshiftPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "redshift"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "warehouse", "redshift"),
    },
  };
}
