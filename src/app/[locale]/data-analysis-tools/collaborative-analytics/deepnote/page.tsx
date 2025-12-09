import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { DeepnotePageContent } from "@/components/pages/collaborative-analytics/deepnote-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  const isJa = locale === "ja";
  return {
    title: isZh ? "Deepnote — 协作式云端 Notebook" : isJa ? "Deepnote — コラボクラウドノートブック" : "Deepnote — Collaborative cloud notebook",
    description: isZh
      ? "支持 SQL 与 Python 的云端协作 Notebook，实时协作、评论和数据源集成。"
      : isJa
        ? "SQL と Python に対応したクラウドノートブック。リアルタイム共同編集、コメント、データ連携を備えます。"
        : "Collaborative cloud notebook with SQL and Python, real-time coauthoring, comments, and data source integrations.",
  };
};

export default async function LocaleDeepnotePage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <DeepnotePageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "collaborative-analytics", "deepnote"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "collaborative-analytics", "deepnote"),
    },
  };
}

