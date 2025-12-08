import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { FireboltPageContent } from "@/components/pages/firebolt-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Firebolt — 高性能云原生数仓",
  description: "Firebolt 主打低延迟查询与索引/存储优化，适合交互式分析与高并发场景。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "firebolt"),
  },
};

export default function FireboltPage() {
  return <FireboltPageContent locale={defaultLocale} />;
}
