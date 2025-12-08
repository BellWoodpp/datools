import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { SupersetPageContent } from "@/components/pages/superset-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Apache Superset — Open-source BI & visualization",
  description:
    "Apache Superset 提供 SQL Lab、可视化与权限控制的开源 BI，支持自托管与插件扩展。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "superset"),
  },
};

export default function SupersetPage() {
  return <SupersetPageContent locale={defaultLocale} />;
}
