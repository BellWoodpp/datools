import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { DbtPageContent } from "@/components/pages/dbt-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "dbt — Open-source analytics engineering",
  description:
    "Open-source analytics engineering framework using SQL/Jinja for models, tests, and docs across warehouses and Lakehouse.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "dbt"),
  },
};

export default function DbtPage() {
  return <DbtPageContent locale={defaultLocale} />;
}
