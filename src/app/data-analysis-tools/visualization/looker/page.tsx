import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { LookerPageContent } from "@/components/pages/looker-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Looker — LookML 语义层与可视化",
  description: "Looker 提供 LookML 语义层、仪表板、嵌入式分析与权限治理，适合统一指标与内嵌分析场景。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "looker"),
  },
};

export default function LookerPage() {
  return <LookerPageContent locale={defaultLocale} />;
}
