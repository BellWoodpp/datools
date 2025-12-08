import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { PostHogPageContent } from "@/components/pages/posthog-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "PostHog — 开源产品分析与实验",
  description: "PostHog 提供事件、漏斗、留存、Session 回放、Feature Flags 与 A/B 测试，支持自托管。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "posthog"),
  },
};

export default function PostHogPage() {
  return <PostHogPageContent locale={defaultLocale} />;
}
