import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { GrowthBookPageContent } from "@/components/pages/attribution/growthbook-content";
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
      ? "GrowthBook — 开源 A/B 测试与特性开关"
      : isJa
        ? "GrowthBook — オープンソースの A/B テストとフラグ"
        : "GrowthBook — Open-source A/B testing & feature flags",
    description: isZh
      ? "GrowthBook 提供开源/云端的 A/B 测试与特性开关，支持自托管、指标定义与多语言 SDK。"
      : isJa
        ? "GrowthBook はオープンソース/クラウドの A/B テストとフィーチャーフラグを提供し、自社ホストや指標定義、多言語 SDK に対応します。"
        : "GrowthBook offers open-source/cloud A/B testing and feature flags with self-hosting, metric definitions, and multi-language SDKs.",
  };
};

export default async function LocaleGrowthBookPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <GrowthBookPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "attribution", "growthbook"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "attribution", "growthbook"),
    },
  };
}

