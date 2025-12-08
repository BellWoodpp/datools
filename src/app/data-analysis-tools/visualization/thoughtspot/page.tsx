import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { ThoughtSpotPageContent } from "@/components/pages/thoughtspot-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "ThoughtSpot — 搜索驱动分析",
  description: "ThoughtSpot 提供搜索式自助分析与 AI 推荐，支持嵌入式分析与权限治理。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "thoughtspot"),
  },
};

export default function ThoughtSpotPage() {
  return <ThoughtSpotPageContent locale={defaultLocale} />;
}
