import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { N8nPageContent } from "@/components/pages/elt-integration/n8n-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "N8n — Data analysis tool",
  description:
    "Open-source low-code automation/integration with visual workflows, webhooks, and rich nodes; self-hostable.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "elt-integration", "n8n"),
  },
};

export default function N8nPage() {
  return <N8nPageContent locale={defaultLocale} />;
}
