import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { SmartlookPageContent } from "@/components/pages/product-analytics/smartlook-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Smartlook — 体验回放与行为分析" : "Smartlook — replay and behavior analytics",
    description: isZh
      ? "Smartlook 提供 Session 回放、漏斗、热力图与事件追踪，定位体验与转化问题。"
      : "Smartlook offers session replay, funnels, heatmaps, and event tracking to spot UX and conversion issues.",
  };
};

export default async function LocaleSmartlookPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <SmartlookPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "smartlook"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "product-analytics", "smartlook"),
    },
  };
}
