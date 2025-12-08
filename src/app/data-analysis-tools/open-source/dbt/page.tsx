import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { DbtPageContent } from "@/components/pages/dbt-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "dbt — Open-source analytics engineering",
  description:
    "dbt 用 SQL 定义模型、测试与文档，支持仓库/Lakehouse 上的可维护转换与语义层。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "dbt"),
  },
};

export default function DbtPage() {
  return <DbtPageContent locale={defaultLocale} />;
}
