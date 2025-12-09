import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { SigmaPageContent } from "@/components/pages/visualization/sigma-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sigma — Data analysis tool",
  description:
    "Spreadsheet-like cloud BI with warehouse-native compute for business self-service analytics and live metrics.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "sigma"),
  },
};

export default function SigmaPage() {
  return <SigmaPageContent locale={defaultLocale} />;
}
