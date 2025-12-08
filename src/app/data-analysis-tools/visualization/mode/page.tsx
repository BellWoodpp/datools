import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { ModePageContent } from "@/components/pages/mode-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mode — SQL + Notebook 的分析型 BI",
  description: "Mode 将 SQL、可视化与 Python/R Notebook 结合，便于分析师协作与分享仪表板。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "mode"),
  },
};

export default function ModePage() {
  return <ModePageContent locale={defaultLocale} />;
}
