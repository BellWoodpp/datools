import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { TableauPageContent } from "@/components/pages/tableau-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Tableau 数据可视化与 BI 介绍" : "Tableau BI & visualization overview",
    description: isZh
      ? "Tableau：拖拽式交互 BI，连接数据库、表格和云服务，覆盖 Prep 清洗、Desktop/Cloud 分析与 Server/Cloud 协作。"
      : "Tableau: drag-and-drop BI with connections to databases, spreadsheets, and cloud services, spanning Prep, Desktop/Cloud analytics, and Server/Cloud collaboration.",
  };
};

export default async function LocaleTableauPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <TableauPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "tableau"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "tableau"),
    },
  };
}
