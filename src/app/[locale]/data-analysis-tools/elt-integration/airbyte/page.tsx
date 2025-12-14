import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { AirbytePageContent } from "@/components/pages/elt-integration/airbyte-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Airbyte — 开源 ELT 连接器" : "Airbyte — open-source ELT connectors",
    description: isZh
      ? "Airbyte 提供社区驱动的连接器、增量同步与自托管/云端选项，适合灵活的 ELT 管道。"
      : "Airbyte delivers community connectors, incremental sync, and self-hosted/cloud options for flexible ELT pipelines.",
  };
};

export default async function LocaleAirbytePage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <AirbytePageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "elt-integration", "airbyte"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "elt-integration", "airbyte"),
    },
  };
}
