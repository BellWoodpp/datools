import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { RudderStackPageContent } from "@/components/pages/elt-integration/rudderstack-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "RudderStack — 开源 CDP / 事件管道" : "RudderStack — OSS CDP/event routing",
    description: isZh
      ? "RudderStack 兼容 Segment API，支持自托管或云端，将事件送仓库与下游工具。"
      : "RudderStack is Segment-compatible, self-hosted or cloud, routing events to warehouses and destinations.",
  };
};

export default async function LocaleRudderStackPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <RudderStackPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "rudderstack"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "ELT-Integration", "rudderstack"),
    },
  };
}
