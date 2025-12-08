import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { DatabricksAutoMLPageContent } from "@/components/pages/databricks-automl-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Databricks AutoML — Lakehouse automation",
  description:
    "Databricks AutoML 自动生成 Notebook、特征工程与 MLflow 部署，基于 Lakehouse/Delta 的 AutoML 工作流。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "AI-assistants", "databricks-automl"),
  },
};

export default function DatabricksAutoMLPage() {
  return <DatabricksAutoMLPageContent locale={defaultLocale} />;
}
