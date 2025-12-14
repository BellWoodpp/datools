import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { GPTSqlAssistantsPageContent } from "@/components/pages/ai-assistants/gpt-sql-assistants-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "GPT-style SQL/visual assistants — Natural language to insights",
  description:
    "Natural-language SQL and visualization assistants (ChatGPT-style) that generate queries/charts, explain results, and connect securely to databases/BI.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ai-assistants", "gpt-sql-vis-assistants"),
  },
};

export default function GPTSqlAssistantsPage() {
  return <GPTSqlAssistantsPageContent locale={defaultLocale} />;
}
