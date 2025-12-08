import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { ClickHousePageContent } from "@/components/pages/clickhouse-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "ClickHouse — 开源实时分析数据库",
  description: "ClickHouse 提供列式存储与高性能查询，适合日志、监控与实时产品分析，可自托管或云服务。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "clickhouse"),
  },
};

export default function ClickHousePage() {
  return <ClickHousePageContent locale={defaultLocale} />;
}
