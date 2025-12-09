import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { SmartlookPageContent } from "@/components/pages/product-analytics/smartlook-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Smartlook — Data analysis tool",
  description:
    "Experience and behavior analytics with session replay, funnels, heatmaps, and event tracking to find UX and conversion issues.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "smartlook"),
  },
};

export default function SmartlookPage() {
  return <SmartlookPageContent locale={defaultLocale} />;
}
