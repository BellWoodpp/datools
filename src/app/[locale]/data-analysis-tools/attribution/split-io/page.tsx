import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { SplitIoPageContent } from "@/components/pages/attribution/split-io-content";
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
      ? "Split.io — 特性开关与实验"
      : isJa
        ? "Split.io — フィーチャーフラグと実験"
        : "Split.io — Feature flags & experimentation",
    description: isZh
      ? "Split.io 提供特性开关与实验，支持回滚、指标监控与治理，适合产品/工程团队。"
      : isJa
        ? "Split.io はフィーチャーフラグと実験を提供し、ロールバック、メトリクス監視、ガバナンスでプロダクト/エンジニアリングチームを支援します。"
        : "Split.io delivers feature flagging and experimentation with rollbacks, metrics monitoring, and governance for product/engineering teams.",
  };
};

export default async function LocaleSplitIOPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <SplitIoPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "attribution", "split-io"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "attribution", "split-io"),
    },
  };
}
