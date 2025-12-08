import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { DatabricksAutoMLPageContent } from "@/components/pages/databricks-automl-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Databricks AutoML — Lakehouse automation",
  description:
    "Lakehouse AutoML that generates editable notebooks, feature engineering, and MLflow-tracked experiments for classification, regression, and time series.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "AI-assistants", "databricks-automl"),
  },
};

export default function DatabricksAutoMLPage() {
  return <DatabricksAutoMLPageContent locale={defaultLocale} />;
}
