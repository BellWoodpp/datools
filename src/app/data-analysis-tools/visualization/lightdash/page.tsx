import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { LightdashPageContent } from "@/components/pages/visualization/lightdash-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Lightdash — Data analysis tool",
  description:
    "Open-source BI for dbt, providing Looker-style explores and dashboards from dbt models; self-hosted or cloud.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "lightdash"),
  },
};

export default function LightdashPage() {
  return <LightdashPageContent locale={defaultLocale} />;
}
