import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { VWOPageContent } from "@/components/pages/vwo-content";
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
      ? "VWO — 优化与实验"
      : isJa
        ? "VWO — 最適化と実験"
        : "VWO — Optimization & experimentation",
    description: isZh
      ? "VWO 提供 A/B、多变量测试、热图、会话回放与转化洞察的优化与实验套件。"
      : isJa
        ? "VWO は A/B・多変量テスト、ヒートマップ、セッションリプレイ、コンバージョン分析を備えた最適化/実験スイートです。"
        : "Optimization and experimentation suite offering A/B, multivariate tests, heatmaps, session recordings, and conversion insights.",
  };
};

export default async function LocaleVwoPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <VWOPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "attribution", "vwo"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "attribution", "vwo"),
    },
  };
}
