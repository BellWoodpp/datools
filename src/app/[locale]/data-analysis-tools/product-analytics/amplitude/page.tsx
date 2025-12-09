import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { AmplitudePageContent } from "@/components/pages/product-analytics/amplitude-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Amplitude — 产品行为与增长分析" : "Amplitude — product behavior & growth analytics",
    description: isZh
      ? "Amplitude 提供事件、漏斗、留存、分群与实验能力，服务产品与增长决策。"
      : "Amplitude offers events, funnels, retention, cohorts, and experiments for product and growth decisions.",
  };
};

export default async function LocaleAmplitudePage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <AmplitudePageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "amplitude"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "product-analytics", "amplitude"),
    },
  };
}
