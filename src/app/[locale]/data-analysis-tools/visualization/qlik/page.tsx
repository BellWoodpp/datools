import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { QlikPageContent } from "@/components/pages/visualization/qlik-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Qlik Sense — 关联引擎自助式分析" : "Qlik Sense — associative in-memory analytics",
    description: isZh
      ? "Qlik 基于关联内存引擎，支持自助可视化、实时探索与数据集成，适合运营监控与多源分析。"
      : "Qlik pairs an associative in-memory engine with self-service visuals and data integration for ops monitoring and multi-source analysis.",
  };
};

export default async function LocaleQlikPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <QlikPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "qlik"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "visualization", "qlik"),
    },
  };
}
