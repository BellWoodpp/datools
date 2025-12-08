import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { SupersetPageContent } from "@/components/pages/superset-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Apache Superset — Open-source BI & visualization",
  description: "Superset provides SQL Lab, dashboards, permissions, and plugins for self-hosted or cloud-native BI.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "superset"),
  },
};

export default function SupersetPage() {
  return <SupersetPageContent locale={defaultLocale} />;
}
