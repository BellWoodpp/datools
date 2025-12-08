import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { StitchPageContent } from "@/components/pages/stitch-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Stitch — Data analysis tool",
  description:
    "Lightweight cloud ELT (Talend) with popular connectors and scheduling to load data into warehouses.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "stitch"),
  },
};

export default function StitchPage() {
  return <StitchPageContent locale={defaultLocale} />;
}
