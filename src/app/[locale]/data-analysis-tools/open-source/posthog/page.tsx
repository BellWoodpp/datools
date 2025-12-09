import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { PostHogPageContent } from "@/components/pages/product-analytics/posthog-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "PostHog：开源产品分析" : "PostHog: open-source product analytics",
    description: isZh
      ? "PostHog 提供事件、漏斗、会话回放、特性旗与实验，支持自托管与云端。"
      : "PostHog offers events, funnels, session replay, feature flags, and experiments for self-hosted or cloud teams.",
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
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "posthog"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "open-source", "posthog"),
    },
  };
}
