import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { GrowthBookPageContent } from "@/components/pages/growthbook-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "GrowthBook — Open-source A/B testing & feature flags",
  description:
    "GrowthBook offers open-source/cloud A/B testing and feature flags with self-hosting, metric definitions, and multi-language SDKs.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "attribution", "growthbook"),
  },
};

export default function GrowthBookPage() {
  return <GrowthBookPageContent locale={defaultLocale} />;
}
