import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { DbtTestsPageContent } from "@/components/pages/dbt-tests-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "dbt tests — Data analysis tool",
  description:
    "Built-in and custom dbt tests for model-level data quality with documentation and CI integration.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "governance", "dbt-tests"),
  },
};

export default function DbtTestsPage() {
  return <DbtTestsPageContent locale={defaultLocale} />;
}
