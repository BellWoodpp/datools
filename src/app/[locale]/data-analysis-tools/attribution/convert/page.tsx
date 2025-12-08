import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { ConvertPageContent } from "@/components/pages/convert-content";
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
      ? "Convert — 注重隐私的 A/B 测试"
      : isJa
        ? "Convert — プライバシー重視の A/B テスト"
        : "Convert — Privacy-focused A/B testing",
    description: isZh
      ? "Convert 提供注重隐私的 A/B 测试与个性化，支持可视化编辑、服务端实验与 GDPR 合规。"
      : isJa
        ? "Convert はプライバシー重視の A/B テストとパーソナライゼーションを提供し、ビジュアル編集、サーバーサイド実験、GDPR 準拠に対応します。"
        : "Convert provides privacy-focused A/B testing and personalization with visual editing, server-side experiments, and GDPR compliance.",
  };
};

export default async function LocaleConvertPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <ConvertPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "attribution", "convert"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "attribution", "convert"),
    },
  };
}

