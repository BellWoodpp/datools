import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { MetabasePageContent } from "@/components/pages/visualization/metabase-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Metabase — Open-source self-service BI",
  description: "Metabase offers GUI/SQL questions, dashboards, alerts, and embedding with easy self-hosting for teams.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "metabase"),
  },
};

export default function MetabasePage() {
  return <MetabasePageContent locale={defaultLocale} />;
}
