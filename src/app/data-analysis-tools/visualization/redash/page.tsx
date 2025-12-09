import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { RedashPageContent } from "@/components/pages/visualization/redash-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Redash — Data analysis tool",
  description:
    "SQL-first lightweight BI connecting many sources, with parameterized queries, visuals, dashboards, schedules, and alerts.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "redash"),
  },
};

export default function RedashPage() {
  return <RedashPageContent locale={defaultLocale} />;
}
