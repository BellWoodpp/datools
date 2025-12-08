import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { AirflowPageContent } from "@/components/pages/airflow-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Apache Airflow — Open-source workflow orchestration",
  description:
    "Apache Airflow 以 Python DAG 管理调度、依赖与监控，适合数据工程与自托管工作流。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "airflow"),
  },
};

export default function AirflowPage() {
  return <AirflowPageContent locale={defaultLocale} />;
}
