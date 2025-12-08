import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { ABTastyPageContent } from "@/components/pages/ab-tasty-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AB Tasty — Experience optimization",
  description:
    "Digital experience optimization with A/B testing, personalization, feature flags, and behavioral insights.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "attribution", "ab-tasty"),
  },
};

export default function AbTastyPage() {
  return <ABTastyPageContent locale={defaultLocale} />;
}
