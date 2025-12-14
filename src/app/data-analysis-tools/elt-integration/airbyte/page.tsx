import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { AirbytePageContent } from "@/components/pages/elt-integration/airbyte-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Airbyte — Open-source ELT connectors",
  description: "Open-source ELT connector platform with community connectors, incremental sync, and self-hosted or cloud options.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "elt-integration", "airbyte"),
  },
};

export default function AirbytePage() {
  return <AirbytePageContent locale={defaultLocale} />;
}
