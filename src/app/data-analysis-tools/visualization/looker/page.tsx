import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { LookerPageContent } from "@/components/pages/looker-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Looker — Data analysis tool",
  description:
    "Google Cloud semantic layer and BI platform using LookML to model metrics; supports governed dashboards and embedded analytics.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "looker"),
  },
};

export default function LookerPage() {
  return <LookerPageContent locale={defaultLocale} />;
}
