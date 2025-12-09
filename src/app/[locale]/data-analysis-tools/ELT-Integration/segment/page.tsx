import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { SegmentPageContent } from "@/components/pages/elt-integration/segment-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Segment — CDP 与事件路由" : "Segment — CDP and event routing",
    description: isZh
      ? "Segment 采集多端事件，路由到仓库与下游工具，支持身份解析与受众激活。"
      : "Segment collects multi-platform events, routes to warehouses and destinations with identity and audience activation.",
  };
};

export default async function LocaleSegmentPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <SegmentPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "segment"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "ELT-Integration", "segment"),
    },
  };
}
