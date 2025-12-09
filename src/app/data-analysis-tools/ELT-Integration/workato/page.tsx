import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { WorkatoPageContent } from "@/components/pages/elt-integration/workato-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Workato — Data analysis tool",
  description:
    "Enterprise iPaaS/automation with triggers, workflows, data sync, and governance for cross-department integrations.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "workato"),
  },
};

export default function WorkatoPage() {
  return <WorkatoPageContent locale={defaultLocale} />;
}
