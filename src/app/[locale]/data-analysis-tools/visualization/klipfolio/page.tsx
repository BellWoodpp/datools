import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { KlipfolioPageContent } from "@/components/pages/visualization/klipfolio-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Klipfolio — KPI 仪表板与监控" : "Klipfolio — KPI dashboards & monitoring",
    description: isZh
      ? "Klipfolio 以拖拽方式构建 KPI 仪表板，提供丰富连接器、刷新与告警、分享与嵌入。"
      : "Klipfolio builds KPI dashboards with drag-and-drop components, broad connectors, refresh/alerts, and embeds.",
  };
};

export default async function LocaleKlipfolioPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <KlipfolioPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "klipfolio"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "visualization", "klipfolio"),
    },
  };
}
