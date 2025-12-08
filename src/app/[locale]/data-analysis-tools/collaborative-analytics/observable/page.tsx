import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { ObservablePageContent } from "@/components/pages/observable-content";
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
    title: isZh ? "Observable — 可视化 Notebook" : isJa ? "Observable — 可視化ノートブック" : "Observable — Visualization notebook",
    description: isZh
      ? "基于浏览器的可视化与 Notebook 平台，使用 JavaScript/Observable 语法构建交互数据故事。"
      : isJa
        ? "ブラウザベースの可視化・ノートブック。JavaScript/Observable 構文でインタラクティブなデータストーリーを作成。"
        : "Browser-based notebook and visualization platform using JavaScript/Observable syntax for interactive data stories.",
  };
};

export default async function LocaleObservablePage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <ObservablePageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "collaborative-analytics", "observable"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "collaborative-analytics", "observable"),
    },
  };
}

