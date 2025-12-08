import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { GPTSqlAssistantsPageContent } from "@/components/pages/gpt-sql-assistants-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "GPT 类 SQL / 可视化助手" : "GPT-style SQL/visual assistants",
    description: isZh
      ? "自然语言转 SQL/图表并提供解释，连接数据库/仓库或 BI 语义层并保留安全控制。"
      : "Natural language to SQL/charts with explanations, connecting to databases/warehouses or BI semantics with security controls.",
  };
};

export default async function LocaleGPTSqlAssistantsPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <GPTSqlAssistantsPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "AI-assistants", "gpt-sql-vis-assistants"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "AI-assistants", "gpt-sql-vis-assistants"),
    },
  };
}
