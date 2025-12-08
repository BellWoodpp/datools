import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { BuiltInMlPageContent } from "@/components/pages/built-in-ml-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Built-in ML (Power BI / BigQuery) — In-place AutoML",
  description:
    "Power BI 数据流 AutoML 与 BigQuery ML 支持在 BI/仓库内就地训练与预测，适合分析师低代码建模。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "AI-assistants", "built-in-ml-power-bi-bigquery"),
  },
};

export default function BuiltInMlPage() {
  return <BuiltInMlPageContent locale={defaultLocale} />;
}
