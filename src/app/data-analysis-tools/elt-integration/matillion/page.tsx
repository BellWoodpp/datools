import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { MatillionPageContent } from "@/components/pages/elt-integration/matillion-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Matillion — Data analysis tool",
  description:
    "ELT/ETL for cloud warehouses with visual orchestration, transforms, and scheduling for Snowflake/BigQuery/Redshift, etc.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "elt-integration", "matillion"),
  },
};

export default function MatillionPage() {
  return <MatillionPageContent locale={defaultLocale} />;
}
