import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { MixpanelPageContent } from "@/components/pages/mixpanel-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mixpanel — Data analysis tool",
  description:
    "Event-based product analytics with funnels, retention, cohorts, and signal analysis for optimization and growth.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "mixpanel"),
  },
};

export default function MixpanelPage() {
  return <MixpanelPageContent locale={defaultLocale} />;
}
