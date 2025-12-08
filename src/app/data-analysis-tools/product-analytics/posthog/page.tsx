import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { PostHogPageContent } from "@/components/pages/posthog-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "PostHog — Open-source product analytics",
  description: "Open-source product analytics with events, funnels, retention, session replay, feature flags, and A/B tests; self-hostable.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "posthog"),
  },
};

export default function PostHogPage() {
  return <PostHogPageContent locale={defaultLocale} />;
}
