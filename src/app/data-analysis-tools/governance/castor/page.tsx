import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { CastorPageContent } from "@/components/pages/castor-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Castor — Data analysis tool",
  description:
    "Data catalog and discovery with lineage, documentation, asset scoring, and governance collaboration.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "governance", "castor"),
  },
};

export default function CastorPage() {
  return <CastorPageContent locale={defaultLocale} />;
}
