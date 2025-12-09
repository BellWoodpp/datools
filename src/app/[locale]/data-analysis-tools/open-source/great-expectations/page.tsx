import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { GreatExpectationsPageContent } from "@/components/pages/governance/great-expectations-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Great Expectations：开源数据质量" : "Great Expectations: open-source data quality",
    description: isZh
      ? "Great Expectations 基于期望规则校验与文档化数据质量，支持自托管与云端。"
      : "Great Expectations validates and documents data quality with expectation rules for self-hosted or cloud.",
  };
};

export default async function LocaleGreatExpectationsPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <GreatExpectationsPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "great-expectations"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "open-source", "great-expectations"),
    },
  };
}
