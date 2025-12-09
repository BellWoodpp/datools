import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { ModePageContent } from "@/components/pages/visualization/mode-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mode — Data analysis tool",
  description:
    "Analyst-friendly BI combining SQL, Python/R notebooks, and visualizations for collaboration and sharing.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "mode"),
  },
};

export default function ModePage() {
  return <ModePageContent locale={defaultLocale} />;
}
