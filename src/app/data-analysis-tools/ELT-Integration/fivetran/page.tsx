import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { FivetranPageContent } from "@/components/pages/elt-integration/fivetran-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Fivetran — Data analysis tool",
  description:
    "Fully managed ELT pipelines syncing databases/SaaS/events to warehouses with scheduling, incrementals, and monitoring.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "fivetran"),
  },
};

export default function FivetranPage() {
  return <FivetranPageContent locale={defaultLocale} />;
}
