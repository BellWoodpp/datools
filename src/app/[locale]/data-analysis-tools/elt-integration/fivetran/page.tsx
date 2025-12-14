import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { FivetranPageContent } from "@/components/pages/elt-integration/fivetran-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Fivetran — 全托管 ELT 管道" : "Fivetran — managed ELT pipelines",
    description: isZh
      ? "Fivetran 提供托管连接器、增量同步与监控，将数据库与 SaaS 数据写入云仓/数据湖。"
      : "Fivetran offers managed connectors, incremental sync, and monitoring to load DB/SaaS data into cloud warehouses/lakes.",
  };
};

export default async function LocaleFivetranPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <FivetranPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "elt-integration", "fivetran"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "elt-integration", "fivetran"),
    },
  };
}
