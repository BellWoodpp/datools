import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { PolynotePageContent } from "@/components/pages/collaborative-analytics/polynote-content";
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
    title: isZh
      ? "Polynote — 多语言 Notebook"
      : isJa
        ? "Polynote — ポリグロット ノートブック"
        : "Polynote — Polyglot notebook",
    description: isZh
      ? "Polynote 是支持 Scala/Python 等多语言的开源 Notebook，具备强类型与可复现性，适合数据工程与科学。"
      : isJa
        ? "Polynote は Scala/Python などに対応するオープンソースのポリグロット ノートブックで、強い型付けと再現性を備え、データエンジニアリングやサイエンスに適します。"
        : "Open-source polyglot notebook (Scala/Python, etc.) with strong typing and reproducibility for data engineering and science.",
  };
};

export default async function LocalePolynotePage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <PolynotePageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "collaborative-analytics", "polynote"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "collaborative-analytics", "polynote"),
    },
  };
}

