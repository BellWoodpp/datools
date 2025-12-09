import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { MatillionPageContent } from "@/components/pages/elt-integration/matillion-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Matillion — 云仓 ETL/ELT" : "Matillion — ETL/ELT for cloud warehouses",
    description: isZh
      ? "Matillion 提供可视化编排、转换组件与调度，面向 Snowflake/BigQuery/Redshift 等云仓。"
      : "Matillion offers visual orchestration, transforms, and scheduling for cloud warehouses like Snowflake/BigQuery/Redshift.",
  };
};

export default async function LocaleMatillionPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <MatillionPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "matillion"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "ELT-Integration", "matillion"),
    },
  };
}
