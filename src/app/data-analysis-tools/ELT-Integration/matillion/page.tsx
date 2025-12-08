import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { MatillionPageContent } from "@/components/pages/matillion-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Matillion — 云仓 ETL/ELT",
  description: "Matillion 提供可视化编排、转换组件与调度，面向 Snowflake/BigQuery/Redshift 等云仓。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "matillion"),
  },
};

export default function MatillionPage() {
  return <MatillionPageContent locale={defaultLocale} />;
}
