import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { JunePageContent } from "@/components/pages/product-analytics/june-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "June — Data analysis tool",
  description:
    "SaaS product metrics dashboards and reports on top of event data: funnels, retention, activation, and growth KPIs.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "june"),
  },
};

export default function JunePage() {
  return <JunePageContent locale={defaultLocale} />;
}
