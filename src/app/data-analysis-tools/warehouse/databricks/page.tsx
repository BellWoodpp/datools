import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { DatabricksPageContent } from "@/components/pages/databricks-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Databricks — Lakehouse 平台",
  description: "Databricks 基于 Delta Lake、Spark、MLflow 与 SQL Warehouse，统一湖仓与 AI 工作负载。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "databricks"),
  },
};

export default function DatabricksPage() {
  return <DatabricksPageContent locale={defaultLocale} />;
}
