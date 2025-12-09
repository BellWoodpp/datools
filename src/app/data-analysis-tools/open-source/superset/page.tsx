import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { SupersetPageContent } from "@/components/pages/visualization/superset-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Apache Superset — Open-source BI & visualization",
  description:
    "Apache open-source BI with SQL Lab, visualization plugins, dashboards, and permissions; great for self-hosted and cloud-native deploys.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "superset"),
  },
};

export default function SupersetPage() {
  return <SupersetPageContent locale={defaultLocale} />;
}
