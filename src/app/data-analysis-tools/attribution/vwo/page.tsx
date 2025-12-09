import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { VWOPageContent } from "@/components/pages/attribution/vwo-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "VWO — Optimization & experimentation",
  description:
    "Optimization and experimentation suite offering A/B, multivariate tests, heatmaps, session recordings, and conversion insights.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "attribution", "vwo"),
  },
};

export default function VwoPage() {
  return <VWOPageContent locale={defaultLocale} />;
}
