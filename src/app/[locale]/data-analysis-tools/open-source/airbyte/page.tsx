import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { AirbytePageContent } from "@/components/pages/airbyte-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Airbyte：开源 ELT 连接器" : "Airbyte: open-source ELT connectors",
    description: isZh
      ? "Airbyte 提供开源 ELT 连接器、增量同步与云端/自托管部署，社区生态丰富。"
      : "Airbyte offers open-source ELT connectors with incremental sync and cloud/self-hosted options.",
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
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "airbyte"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "open-source", "airbyte"),
    },
  };
}
