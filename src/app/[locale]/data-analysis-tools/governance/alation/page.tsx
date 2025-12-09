import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { AlationPageContent } from "@/components/pages/governance/alation-content";
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
      ? "Alation — 数据目录与治理"
      : isJa
        ? "Alation — データカタログとガバナンス"
        : "Alation — Data catalog & governance",
    description: isZh
      ? "Alation 提供数据目录与治理，包含搜索、血缘、策略与协作，加速数据发现。"
      : isJa
        ? "Alation は検索、血統、ポリシー、コラボレーションを備えたデータカタログ/ガバナンスを提供し、データ発見を促進します。"
        : "Alation delivers enterprise data catalog and governance with search, lineage, policies, and collaboration for discovery.",
  };
};

export default async function LocaleAlationPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <AlationPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "governance", "alation"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "governance", "alation"),
    },
  };
}

