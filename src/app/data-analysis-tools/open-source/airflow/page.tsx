import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { AirflowPageContent } from "@/components/pages/open-source/airflow-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Apache Airflow — Open-source workflow orchestration",
  description:
    "Apache Airflow orchestrates Python-defined DAGs with scheduling, retries, backfills, and a large provider ecosystem for self-hosted data workflows.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "airflow"),
  },
};

export default function AirflowPage() {
  return <AirflowPageContent locale={defaultLocale} />;
}
