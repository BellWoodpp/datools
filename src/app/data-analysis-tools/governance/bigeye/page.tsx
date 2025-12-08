import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { BigeyePageContent } from "@/components/pages/bigeye-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Bigeye — Data analysis tool",
  description:
    "Data quality monitoring with self-serve rules, SLAs, anomaly detection, and alerting.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "governance", "bigeye"),
  },
};

export default function BigeyePage() {
  return <BigeyePageContent locale={defaultLocale} />;
}
