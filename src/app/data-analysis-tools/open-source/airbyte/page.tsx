import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { AirbytePageContent } from "@/components/pages/airbyte-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Airbyte — Open-source ELT connectors",
  description:
    "Airbyte 提供开源 ELT 连接器平台，增量同步与自托管/云端选择，社区生态丰富。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "airbyte"),
  },
};

export default function AirbytePage() {
  return <AirbytePageContent locale={defaultLocale} />;
}
