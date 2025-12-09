import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { LookerStudioPageContent } from "@/components/pages/visualization/looker-studio-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Looker Studio — 免费仪表板与可视化" : "Looker Studio — free dashboards",
    description: isZh
      ? "Looker Studio（原 Data Studio）提供拖拽式报表、丰富连接器与分享嵌入，适合轻量报表场景。"
      : "Looker Studio (ex-Data Studio) delivers drag-and-drop dashboards with connectors and sharing for lightweight reporting.",
  };
};

export default async function LocaleLookerStudioPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <LookerStudioPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "looker-studio"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "visualization", "looker-studio"),
    },
  };
}
