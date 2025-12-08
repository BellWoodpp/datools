import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { FullStoryPageContent } from "@/components/pages/fullstory-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FullStory — Data analysis tool",
  description:
    "Digital experience analytics with session replay, journey insights, funnels, retention, and alerts for UX issues.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "fullstory"),
  },
};

export default function FullStoryPage() {
  return <FullStoryPageContent locale={defaultLocale} />;
}
