import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://clickhouse.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "实时分析 · ClickHouse",
    title: "ClickHouse：开源列式实时分析数据库",
    subtitle: "高性能写入与查询，支持自托管与云服务",
    description:
      "ClickHouse 是开源列式数据库，擅长实时/近实时分析，支持向量化执行、分布式与物化视图，可自托管或使用 ClickHouse Cloud。适合日志、监控、产品分析与指标场景。",
    highlights: [
      { title: "高性能列存", description: "列式存储与向量化执行，低延迟查询。" },
      { title: "实时/批量写入", description: "高速摄取日志与事件，支持分布式集群。" },
      { title: "物化视图与索引", description: "物化视图、稀疏索引/跳跃索引加速查询。" },
      { title: "开源与云", description: "自托管灵活，ClickHouse Cloud 提供托管版。" },
    ],
    useCases: ["日志与监控分析", "实时指标与看板", "产品与事件分析", "高并发低延迟查询"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Real-time Analytics · ClickHouse",
    title: "ClickHouse: open-source columnar OLAP",
    subtitle: "High-performance ingest and queries; self-hosted or cloud",
    description:
      "ClickHouse is an open-source columnar database built for real-time/near-real-time analytics with vectorized execution, distributed clusters, and materialized views. Run self-hosted or on ClickHouse Cloud for logs, metrics, and product analytics.",
    highlights: [
      { title: "High-performance columnar", description: "Vectorized execution and column storage for low latency." },
      { title: "Fast ingest", description: "High-speed log/event ingestion with distributed scale-out." },
      { title: "Materialized views/indexes", description: "MVs and skip/sparse indexes to accelerate queries." },
      { title: "OSS and cloud", description: "Flexible self-host plus managed cloud option." },
    ],
    useCases: ["Log/monitoring analytics", "Real-time dashboards", "Product/event analytics", "High-QPS low-latency queries"],
    ctaVisit: "Visit ClickHouse",
    ctaBack: "Back to home",
  },
};

export function ClickHousePageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
