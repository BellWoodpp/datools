import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { HevoPageContent } from "@/components/pages/elt-integration/hevo-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hevo — Data analysis tool",
  description:
    "No-code data pipeline/ELT for real-time and batch sync from many sources to warehouses/lakes with monitoring.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "hevo"),
  },
};

export default function HevoPage() {
  return <HevoPageContent locale={defaultLocale} />;
}
