import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { CollibraPageContent } from "@/components/pages/collibra-content";
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
      ? "Collibra — 数据治理与目录"
      : isJa
        ? "Collibra — データガバナンスとカタログ"
        : "Collibra — Data governance & catalog",
    description: isZh
      ? "Collibra 提供企业级数据治理与目录，涵盖质量、血缘、隐私与合规工作流。"
      : isJa
        ? "Collibra は品質、血統、プライバシー、コンプライアンスのワークフローを含むデータガバナンス/カタログを提供します。"
        : "Collibra provides enterprise data governance and catalog covering quality, lineage, privacy, and compliance workflows.",
  };
};

export default async function LocaleCollibraPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <CollibraPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "governance", "collibra"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "governance", "collibra"),
    },
  };
}

