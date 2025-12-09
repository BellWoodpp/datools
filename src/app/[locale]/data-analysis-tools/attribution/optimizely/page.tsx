import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { OptimizelyPageContent } from "@/components/pages/attribution/optimizely-content";
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
      ? "Optimizely — 实验与个性化"
      : isJa
        ? "Optimizely — 実験とパーソナライゼーション"
        : "Optimizely — Experimentation & personalization",
    description: isZh
      ? "成熟的实验与个性化平台，提供 A/B、多变量、特性开关和目标管理。"
      : isJa
        ? "成熟した実験とパーソナライゼーションのプラットフォーム。A/B、多変量、フィーチャーフラグ、目標管理を提供。"
        : "Mature experimentation and personalization platform with A/B, multivariate, feature flags, and objective management.",
  };
};

export default async function LocaleOptimizelyPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <OptimizelyPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "attribution", "optimizely"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "attribution", "optimizely"),
    },
  };
}

