import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { DatabricksPageContent } from "@/components/pages/databricks-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Databricks — Data analysis tool",
  description:
    "Lakehouse platform with Delta Lake, Spark, MLflow, and SQL warehouse; unifies data and AI workloads.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "databricks"),
  },
};

export default function DatabricksPage() {
  return <DatabricksPageContent locale={defaultLocale} />;
}
