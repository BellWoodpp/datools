import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { PendoPageContent } from "@/components/pages/product-analytics/pendo-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pendo — Data analysis tool",
  description:
    "Product experience and analytics with in-app guides, feedback, and behavior insights to drive adoption and retention.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "pendo"),
  },
};

export default function PendoPage() {
  return <PendoPageContent locale={defaultLocale} />;
}
