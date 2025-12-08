import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://duckdb.org/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "本地分析 · DuckDB",
    title: "DuckDB：开源嵌入式列式数据库",
    subtitle: "零服务器、向量化执行，适合本地与嵌入式分析",
    description:
      "DuckDB 是开源嵌入式列式数据库，零服务器依赖，支持向量化执行与标准 SQL，适合本地开发、嵌入式应用、轻量分析与数据科学工作流。",
    highlights: [
      { title: "零服务器", description: "嵌入式部署，免运维启动即可用。" },
      { title: "列存与向量化", description: "高效执行 OLAP 工作负载，支持并行。" },
      { title: "广泛连接", description: "读取 Parquet/CSV/JSON、S3/GCS、本地文件与内存数据。" },
      { title: "易集成", description: "多语言客户端，适配数据科学/Notebook/应用内分析。" },
    ],
    useCases: ["本地/嵌入式分析", "数据科学与特征工程", "轻量 BI/原型验证", "离线转换与 Notebook"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Local Analytics · DuckDB",
    title: "DuckDB: open-source embedded columnar DB",
    subtitle: "Zero-server, vectorized SQL for local and embedded analytics",
    description:
      "DuckDB is an open-source embedded columnar database with vectorized execution and zero server setup—ideal for local development, embedded analytics, data science workflows, and lightweight BI.",
    highlights: [
      { title: "Serverless/embedded", description: "No server to run; start instantly inside apps." },
      { title: "Columnar & vectorized", description: "Efficient OLAP execution with parallelism." },
      { title: "Broad IO", description: "Read Parquet/CSV/JSON, S3/GCS, local files, and in-memory data." },
      { title: "Easy integration", description: "Multi-language clients for notebooks and in-app analytics." },
    ],
    useCases: ["Local/embedded analytics", "Data science & feature work", "Lightweight BI/prototyping", "Offline transforms and notebooks"],
    ctaVisit: "Visit DuckDB",
    ctaBack: "Back to home",
  },
};

export function DuckDBPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
