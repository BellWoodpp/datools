import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { MetabasePageContent } from "@/components/pages/metabase-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Metabase — Open-source self-service BI",
  description:
    "Open-source BI and visualization with SQL/GUI querying, dashboards, and embedding; easy to self-host with broad database support.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "metabase"),
  },
};

export default function MetabasePage() {
  return <MetabasePageContent locale={defaultLocale} />;
}
