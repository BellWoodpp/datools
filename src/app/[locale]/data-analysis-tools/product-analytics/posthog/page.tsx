import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { PostHogPageContent } from "@/components/pages/posthog-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "PostHog — 开源产品分析与实验" : "PostHog — open-source product analytics & experiments",
    description: isZh
      ? "PostHog 提供事件、漏斗、留存、Session 回放、Feature Flags 与 A/B 测试，支持自托管。"
      : "PostHog delivers events, funnels, retention, session replay, feature flags, and A/B testing with self-hosting.",
  };
};

export default async function LocalePostHogPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <PostHogPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "posthog"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "product-analytics", "posthog"),
    },
  };
}
