import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { DagsterPageContent } from "@/components/pages/dagster-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dagster — Open-source data orchestrator",
  description:
    "Open-source orchestrator centered on software-defined assets with typing/validation, lineage, observability, and hybrid execution.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "dagster"),
  },
};

export default function DagsterPage() {
  return <DagsterPageContent locale={defaultLocale} />;
}
