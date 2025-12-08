import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { ABTastyPageContent } from "@/components/pages/ab-tasty-content";
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
      ? "AB Tasty — 数字化体验优化"
      : isJa
        ? "AB Tasty — デジタル体験最適化"
        : "AB Tasty — Digital experience optimization",
    description: isZh
      ? "AB Tasty 提供 A/B 测试、个性化、特性开关与行为洞察，实现数字体验优化。"
      : isJa
        ? "AB Tasty は A/B テスト、パーソナライゼーション、フィーチャーフラグ、行動インサイトでデジタル体験を最適化します。"
        : "Digital experience optimization with A/B testing, personalization, feature flags, and behavioral insights.",
  };
};

export default async function LocaleAbTastyPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <ABTastyPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "attribution", "ab-tasty"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "attribution", "ab-tasty"),
    },
  };
}
