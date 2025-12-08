import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { RedashPageContent } from "@/components/pages/redash-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Redash — SQL 驱动的轻量 BI",
  description: "Redash 支持多数据源 SQL、可视化与仪表板，提供调度与告警，适合快速取数与分享。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "redash"),
  },
};

export default function RedashPage() {
  return <RedashPageContent locale={defaultLocale} />;
}
