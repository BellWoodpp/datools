import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { GPTSqlAssistantsPageContent } from "@/components/pages/gpt-sql-assistants-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "GPT-style SQL/visual assistants — Natural language to insights",
  description:
    "GPT 类 SQL/可视化助手将自然语言转为查询与图表，连接数据库或 BI，提供解释与安全控制。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "AI-assistants", "gpt-sql-vis-assistants"),
  },
};

export default function GPTSqlAssistantsPage() {
  return <GPTSqlAssistantsPageContent locale={defaultLocale} />;
}
