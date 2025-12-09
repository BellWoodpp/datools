import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { TableauPageContent } from "@/components/pages/visualization/tableau-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tableau BI & visualization overview",
  description:
    "Tableau: drag-and-drop BI with connections to databases, spreadsheets, and cloud services, spanning Prep, Desktop/Cloud analytics, and Server/Cloud collaboration.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "tableau"),
  },
};

export default function TableauPage() {
  return <TableauPageContent locale={defaultLocale} />;
}
