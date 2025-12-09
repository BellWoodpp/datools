import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { CollibraPageContent } from "@/components/pages/governance/collibra-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Collibra — Data governance & catalog",
  description:
    "Collibra provides enterprise data governance and catalog covering quality, lineage, privacy, and compliance workflows.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "governance", "collibra"),
  },
};

export default function CollibraPage() {
  return <CollibraPageContent locale={defaultLocale} />;
}
