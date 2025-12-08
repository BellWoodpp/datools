import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { AirbytePageContent } from "@/components/pages/airbyte-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Airbyte — 开源 ELT 连接器",
  description: "Airbyte 提供社区驱动的连接器、增量同步与自托管/云端选项，适合灵活的 ELT 管道。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "airbyte"),
  },
};

export default function AirbytePage() {
  return <AirbytePageContent locale={defaultLocale} />;
}
