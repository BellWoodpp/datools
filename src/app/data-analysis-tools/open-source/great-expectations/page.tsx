import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { GreatExpectationsPageContent } from "@/components/pages/great-expectations-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Great Expectations — Open-source data quality",
  description:
    "Open-source data quality framework using Expectations for validation, docs, and pipeline checks.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "great-expectations"),
  },
};

export default function GreatExpectationsPage() {
  return <GreatExpectationsPageContent locale={defaultLocale} />;
}
