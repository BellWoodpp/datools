import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { DuckDBPageContent } from "@/components/pages/duckdb-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "DuckDB — 开源嵌入式列式数据库",
  description: "DuckDB 零服务器、向量化执行，适合本地/嵌入式分析与数据科学工作流。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "duckdb"),
  },
};

export default function DuckDBPage() {
  return <DuckDBPageContent locale={defaultLocale} />;
}
