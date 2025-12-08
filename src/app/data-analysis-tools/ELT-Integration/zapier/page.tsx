import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { ZapierPageContent } from "@/components/pages/zapier-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Zapier — Data analysis tool",
  description:
    "No-code automation for business users connecting thousands of SaaS apps with trigger-based multi-step workflows.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "zapier"),
  },
};

export default function ZapierPage() {
  return <ZapierPageContent locale={defaultLocale} />;
}
