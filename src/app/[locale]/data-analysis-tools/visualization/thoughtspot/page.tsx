import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { ThoughtSpotPageContent } from "@/components/pages/thoughtspot-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "ThoughtSpot — 搜索驱动分析" : "ThoughtSpot — search-driven analytics",
    description: isZh
      ? "ThoughtSpot 提供搜索式自助分析与 AI 推荐，支持嵌入式分析与权限治理。"
      : "ThoughtSpot offers search-based self-service analytics with AI suggestions, embedding, and governance.",
  };
};

export default async function LocaleThoughtSpotPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <ThoughtSpotPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "thoughtspot"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "visualization", "thoughtspot"),
    },
  };
}
