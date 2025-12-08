import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { AmplitudePageContent } from "@/components/pages/amplitude-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Amplitude — Data analysis tool",
  description:
    "Product analytics platform with event tracking, funnels, retention, cohorts, and experiments for growth insights.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "amplitude"),
  },
};

export default function AmplitudePage() {
  return <AmplitudePageContent locale={defaultLocale} />;
}
