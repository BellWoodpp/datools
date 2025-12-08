import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { QlikPageContent } from "@/components/pages/qlik-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Qlik — Data analysis tool",
  description:
    "Qlik Sense with associative in-memory engine for self-service analytics and visualization plus data integration via Qlik Cloud Data Integration.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "qlik"),
  },
};

export default function QlikPage() {
  return <QlikPageContent locale={defaultLocale} />;
}
