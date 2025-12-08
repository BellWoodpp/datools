import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { MotherDuckPageContent } from "@/components/pages/motherduck-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "MotherDuck — DuckDB 的云协作" : "MotherDuck — cloud for DuckDB",
    description: isZh
      ? "MotherDuck 为 DuckDB 提供云端持久化、共享与混合查询，方便团队协作与扩展。"
      : "MotherDuck adds cloud persistence, sharing, and hybrid queries for DuckDB to enable team collaboration.",
  };
};

export default async function LocaleMotherDuckPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <MotherDuckPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "motherduck"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "warehouse", "motherduck"),
    },
  };
}
