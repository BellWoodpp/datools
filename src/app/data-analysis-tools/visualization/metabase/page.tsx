import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { MetabasePageContent } from "@/components/pages/metabase-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Metabase — 开源自助式 BI",
  description: "Metabase 提供零门槛问答、SQL、仪表板与告警，开源且易自托管，适合团队快速搭建 BI。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "metabase"),
  },
};

export default function MetabasePage() {
  return <MetabasePageContent locale={defaultLocale} />;
}
