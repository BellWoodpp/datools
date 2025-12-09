import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { FireboltPageContent } from "@/components/pages/warehouse/firebolt-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Firebolt — 高性能云原生数仓" : "Firebolt — high-performance cloud warehouse",
    description: isZh
      ? "Firebolt 主打低延迟查询与索引/存储优化，适合交互式分析与高并发场景。"
      : "Firebolt focuses on low-latency, indexed, storage-optimized MPP for interactive and high-concurrency workloads.",
  };
};

export default async function LocaleFireboltPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <FireboltPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "firebolt"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "warehouse", "firebolt"),
    },
  };
}
