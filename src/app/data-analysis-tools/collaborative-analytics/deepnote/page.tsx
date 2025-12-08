import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { DeepnotePageContent } from "@/components/pages/deepnote-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Deepnote — Data analysis tool",
  description:
    "Collaborative cloud notebook with SQL and Python, real-time coauthoring, comments, and data source integrations.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "collaborative-analytics", "deepnote"),
  },
};

export default function DeepnotePage() {
  return <DeepnotePageContent locale={defaultLocale} />;
}
