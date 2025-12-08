import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { DagsterPageContent } from "@/components/pages/dagster-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dagster — Open-source data orchestrator",
  description:
    "Dagster 以软件定义资产管理数据依赖，提供类型检查、可观测与混合执行，适合现代数据管道。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "dagster"),
  },
};

export default function DagsterPage() {
  return <DagsterPageContent locale={defaultLocale} />;
}
