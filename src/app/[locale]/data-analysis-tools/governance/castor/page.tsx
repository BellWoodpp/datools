import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { CastorPageContent } from "@/components/pages/governance/castor-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  const isJa = locale === "ja";
  return {
    title: isZh
      ? "Castor — 数据目录与发现"
      : isJa
        ? "Castor — データカタログと発見"
        : "Castor — Data catalog & discovery",
    description: isZh
      ? "Castor 提供数据目录与发现功能，包含血缘、文档、资产评分与治理协作。"
      : isJa
        ? "Castor はデータカタログ/ディスカバリーを提供し、血統、ドキュメント、アセットスコアリング、ガバナンス協働を備えます。"
        : "Castor provides data catalog and discovery with lineage, documentation, asset scoring, and governance collaboration.",
  };
};

export default async function LocaleCastorPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <CastorPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "governance", "castor"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "governance", "castor"),
    },
  };
}

