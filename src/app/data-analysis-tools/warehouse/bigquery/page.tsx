import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { BigQueryPageContent } from "@/components/pages/bigquery-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "BigQuery — 无服务器云数据仓库",
  description: "BigQuery 提供存算分离、联邦查询与 BI Engine 加速，适合高并发 BI 与流式分析。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "bigquery"),
  },
};

export default function BigQueryPage() {
  return <BigQueryPageContent locale={defaultLocale} />;
}
