import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { AlationPageContent } from "@/components/pages/governance/alation-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Alation — Data catalog & governance",
  description:
    "Alation delivers enterprise data catalog and governance with search, lineage, policies, and collaboration for discovery.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "governance", "alation"),
  },
};

export default function AlationPage() {
  return <AlationPageContent locale={defaultLocale} />;
}
