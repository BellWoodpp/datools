import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { HexPageContent } from "@/components/pages/hex-content";
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
    title: isZh ? "Hex — 协作式 Notebook" : isJa ? "Hex — コラボノートブック" : "Hex — Collaborative notebook",
    description: isZh
      ? "面向数据团队的协作式 Notebook，融合 SQL、Python 与可视化，便于分享和发布应用。"
      : isJa
        ? "データチーム向けのコラボノートブック。SQL・Python・可視化を組み合わせ、共有やアプリ化が容易です。"
        : "Collaborative notebook for data teams combining SQL, Python, and visualizations with easy sharing and apps.",
  };
};

export default async function LocaleHexPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <HexPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "collaborative-analytics", "hex"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "collaborative-analytics", "hex"),
    },
  };
}

