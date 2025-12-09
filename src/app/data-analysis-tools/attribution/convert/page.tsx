import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { ConvertPageContent } from "@/components/pages/attribution/convert-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Convert — Privacy-focused A/B testing",
  description:
    "Convert provides privacy-focused A/B testing and personalization with visual editing, server-side experiments, and GDPR compliance.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "attribution", "convert"),
  },
};

export default function ConvertPage() {
  return <ConvertPageContent locale={defaultLocale} />;
}
