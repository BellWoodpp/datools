import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { MotherDuckPageContent } from "@/components/pages/motherduck-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "MotherDuck — Data analysis tool",
  description:
    "DuckDB-backed cloud collaboration and storage, enabling shared, persisted, and hybrid queries.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "motherduck"),
  },
};

export default function MotherDuckPage() {
  return <MotherDuckPageContent locale={defaultLocale} />;
}
