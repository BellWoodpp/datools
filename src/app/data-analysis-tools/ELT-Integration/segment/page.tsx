import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { SegmentPageContent } from "@/components/pages/elt-integration/segment-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Segment — Data analysis tool",
  description:
    "CDP and event pipeline routing multi-platform data to warehouses and downstream tools with identity resolution and audiences.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "segment"),
  },
};

export default function SegmentPage() {
  return <SegmentPageContent locale={defaultLocale} />;
}
