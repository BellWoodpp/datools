import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { PowerBIPageContent } from "@/components/pages/power-bi-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Power BI — Microsoft self-service BI & visualization",
  description:
    "Microsoft self-service BI suite with Power Query prep, DAX modeling, interactive dashboards, and broad data connectors; tightly integrated with the Microsoft stack.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "power-bi"),
  },
};

export default function PowerBIPage() {
  return <PowerBIPageContent locale={defaultLocale} />;
}
