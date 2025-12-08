import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { PostHogPageContent } from "@/components/pages/posthog-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "PostHog — Open-source product analytics",
  description:
    "PostHog 提供开源产品分析、事件、回放、特性旗与实验，可自托管或云端使用。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "posthog"),
  },
};

export default function PostHogPage() {
  return <PostHogPageContent locale={defaultLocale} />;
}
