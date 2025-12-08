import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { MetabasePageContent } from "@/components/pages/metabase-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Metabase — Open-source self-service BI",
  description:
    "Metabase 提供图形问答/SQL、仪表板与嵌入，开源易自托管，适合团队自助 BI。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "metabase"),
  },
};

export default function MetabasePage() {
  return <MetabasePageContent locale={defaultLocale} />;
}
