import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { RudderStackPageContent } from "@/components/pages/rudderstack-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "RudderStack — Data analysis tool",
  description:
    "Open-source CDP/event pipeline compatible with Segment API; self-hosted or cloud to route events to warehouses and SaaS.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "rudderstack"),
  },
};

export default function RudderStackPage() {
  return <RudderStackPageContent locale={defaultLocale} />;
}
