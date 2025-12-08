import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { MonteCarloPageContent } from "@/components/pages/monte-carlo-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Monte Carlo — Data analysis tool",
  description:
    "Data observability platform for data quality, lineage, SLAs, and impact alerts across pipelines.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "governance", "monte-carlo"),
  },
};

export default function MonteCarloPage() {
  return <MonteCarloPageContent locale={defaultLocale} />;
}
