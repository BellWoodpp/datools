import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { KlipfolioPageContent } from "@/components/pages/klipfolio-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Klipfolio — Data analysis tool",
  description:
    "KPI dashboard and monitoring tool with drag-and-drop builder, rich SaaS/database/API connectors, refresh, and alerts.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "klipfolio"),
  },
};

export default function KlipfolioPage() {
  return <KlipfolioPageContent locale={defaultLocale} />;
}
