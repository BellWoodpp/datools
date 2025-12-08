import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { BuiltInMlPageContent } from "@/components/pages/built-in-ml-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Built-in ML (Power BI / BigQuery) — In-place AutoML",
  description:
    "In-place AutoML via Power BI dataflows and BigQuery ML with SQL/low-code training and predictions reusable in reports and tables.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "AI-assistants", "built-in-ml-power-bi-bigquery"),
  },
};

export default function BuiltInMlPage() {
  return <BuiltInMlPageContent locale={defaultLocale} />;
}
