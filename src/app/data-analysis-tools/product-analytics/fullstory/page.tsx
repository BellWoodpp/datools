import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { FullStoryPageContent } from "@/components/pages/fullstory-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FullStory — 体验分析与回放",
  description: "FullStory 提供 Session 回放、路径、漏斗与告警，定位体验与转化问题。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "fullstory"),
  },
};

export default function FullStoryPage() {
  return <FullStoryPageContent locale={defaultLocale} />;
}
