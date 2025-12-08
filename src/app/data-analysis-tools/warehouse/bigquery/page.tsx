import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { BigQueryPageContent } from "@/components/pages/bigquery-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "BigQuery — Data analysis tool",
  description:
    "Google's serverless cloud warehouse with storage/compute separation, federated queries, and BI Engine acceleration.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "bigquery"),
  },
};

export default function BigQueryPage() {
  return <BigQueryPageContent locale={defaultLocale} />;
}
