import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { ThoughtSpotPageContent } from "@/components/pages/thoughtspot-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "ThoughtSpot — Data analysis tool",
  description:
    "Search-driven analytics with AI suggestions, embedding, and granular security for business users.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "thoughtspot"),
  },
};

export default function ThoughtSpotPage() {
  return <ThoughtSpotPageContent locale={defaultLocale} />;
}
