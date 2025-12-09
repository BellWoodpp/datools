import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { HevoPageContent } from "@/components/pages/elt-integration/hevo-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Hevo — 无代码数据管道" : "Hevo — no-code data pipelines",
    description: isZh
      ? "Hevo 支持多源到仓库/湖的实时与批量同步，内置监控告警与无代码配置。"
      : "Hevo supports real-time and batch sync from many sources to warehouses/lakes with no-code setup and monitoring.",
  };
};

export default async function LocaleHevoPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <HevoPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "hevo"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "ELT-Integration", "hevo"),
    },
  };
}
