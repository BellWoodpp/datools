import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://cloud.google.com/bigquery";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "数据仓库 · BigQuery",
    title: "BigQuery：无服务器云数据仓库",
    subtitle: "存算分离、联邦查询与 BI Engine 加速",
    description:
      "BigQuery 是 Google 的无服务器云数据仓库，采用存算分离，支持联邦查询、流式写入与 BI Engine 内存加速，适合高并发 BI、日志分析与 ML（BigQuery ML）。",
    highlights: [
      { title: "无服务器与按需计费", description: "自动资源管理，查询计费透明。" },
      { title: "联邦与流式", description: "跨外部存储/Sheets/Drive 联邦查询，支持流式摄取。" },
      { title: "BI Engine", description: "内存加速层提升 BI 查询并发与延迟。" },
      { title: "ML 与地理", description: "BigQuery ML、GIS 原生支持，简化分析与建模。" },
    ],
    useCases: ["高并发 BI 报表", "日志与流式分析", "内置 ML/预测", "多源联邦查询"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Data Warehouse · BigQuery",
    title: "BigQuery: serverless cloud warehouse",
    subtitle: "Storage/compute separation, federation, streaming, BI Engine",
    description:
      "BigQuery is Google's serverless warehouse with separated storage/compute, federated queries, streaming ingest, and BI Engine in-memory acceleration—great for high-concurrency BI, logs, and built-in ML (BigQuery ML).",
    highlights: [
      { title: "Serverless & pay-as-you-go", description: "Automatic resource management and transparent query billing." },
      { title: "Federation & streaming", description: "Query external storage/Sheets/Drive; stream ingest natively." },
      { title: "BI Engine acceleration", description: "In-memory layer to speed BI queries and concurrency." },
      { title: "ML & GIS", description: "BigQuery ML and GIS built-in for simplified analytics." },
    ],
    useCases: ["High-concurrency BI", "Log/stream analytics", "Built-in ML/forecasting", "Federated multi-source queries"],
    ctaVisit: "Visit BigQuery",
    ctaBack: "Back to home",
  },
};

export function BigQueryPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
