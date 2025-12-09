import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { RedshiftPageContent } from "@/components/pages/warehouse/redshift-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Redshift — Data analysis tool",
  description:
    "AWS cloud warehouse with Spectrum federation and RA3 storage/compute separation, PostgreSQL-compatible.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "redshift"),
  },
};

export default function RedshiftPage() {
  return <RedshiftPageContent locale={defaultLocale} />;
}
