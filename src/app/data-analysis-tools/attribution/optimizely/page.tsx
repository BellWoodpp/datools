import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { OptimizelyPageContent } from "@/components/pages/optimizely-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Optimizely — Experimentation & personalization",
  description:
    "Mature experimentation and personalization platform with A/B, multivariate, feature flags, and objective management.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "attribution", "optimizely"),
  },
};

export default function OptimizelyPage() {
  return <OptimizelyPageContent locale={defaultLocale} />;
}
