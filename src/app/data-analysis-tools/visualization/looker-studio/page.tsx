import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { LookerStudioPageContent } from "@/components/pages/visualization/looker-studio-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Looker Studio — Data analysis tool",
  description:
    "Google’s free dashboarding tool (ex-Data Studio) with rich connectors, sharing, and embeds for lightweight reporting.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "looker-studio"),
  },
};

export default function LookerStudioPage() {
  return <LookerStudioPageContent locale={defaultLocale} />;
}
