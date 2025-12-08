import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { SupersetPageContent } from "@/components/pages/superset-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Apache Superset — 开源 BI 与可视化",
  description: "Superset 提供 SQL Lab、仪表板与权限管理，开源可自托管并支持云原生部署。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "superset"),
  },
};

export default function SupersetPage() {
  return <SupersetPageContent locale={defaultLocale} />;
}
