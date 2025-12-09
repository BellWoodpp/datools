import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.databricks.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "Lakehouse · Databricks",
    title: "Databricks：统一数据与 AI 的 Lakehouse",
    subtitle: "Delta Lake、Spark、MLflow 与 SQL 仓库，湖仓一体",
    description:
      "Databricks 以 Lakehouse 架构统一数据湖与数据仓库，基于 Delta Lake、Apache Spark、MLflow 与 Photon/SQL Warehouse，支持批/流、BI、机器学习与生成式 AI 工作负载。",
    highlights: [
      { title: "Delta Lake", description: "ACID 表格式与时间旅行，提升数据可靠性。" },
      { title: "统一批流与 BI", description: "Spark/SQL/Photon 支撑流批、BI、交互查询。" },
      { title: "ML/AI 原生", description: "MLflow、特征库与模型部署，加速 AI 应用。" },
      { title: "协作工作区", description: "Notebook、作业、权限与审计，团队协作便捷。" },
    ],
    useCases: ["湖仓一体分析", "流批统一处理", "机器学习与 AI 应用", "数据治理与协作"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Lakehouse · Databricks",
    title: "Databricks: Lakehouse for data + AI",
    subtitle: "Delta Lake, Spark, MLflow, and SQL Warehouse in one platform",
    description:
      "Databricks Lakehouse unifies data lake and warehouse workloads with Delta Lake, Apache Spark, MLflow, and Photon/SQL Warehouse—covering batch/streaming, BI, ML, and generative AI use cases.",
    highlights: [
      { title: "Delta Lake", description: "ACID tables with time travel for reliable data." },
      { title: "Unified batch/stream & BI", description: "Spark/SQL/Photon for streaming, BI, and interactive queries." },
      { title: "ML/AI native", description: "MLflow, feature store, and model serving accelerate AI apps." },
      { title: "Collaborative workspace", description: "Notebooks, jobs, permissions, and auditing for teams." },
    ],
    useCases: ["Lakehouse analytics", "Unified batch/stream", "ML and AI applications", "Governed collaboration"],
    ctaVisit: "Visit Databricks",
    ctaBack: "Back to home",
  },
};

export function DatabricksPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
