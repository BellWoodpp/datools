import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { DuckDBPageContent } from "@/components/pages/warehouse/duckdb-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "DuckDB — Data analysis tool",
  description:
    "Open-source embedded columnar database for local/embedded analytics with vectorized SQL execution.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "duckdb"),
  },
};

export default function DuckDBPage() {
  return <DuckDBPageContent locale={defaultLocale} />;
}
