import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.fivetran.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "ELT / 集成 · Fivetran",
    title: "Fivetran：全托管 ELT 管道",
    subtitle: "丰富连接器、自动调度与增量同步，数据直达仓库",
    description:
      "Fivetran 提供全托管 ELT，从数据库、SaaS、事件源同步数据到云仓库/湖。支持自动模式演进、增量与日志抓取，内置监控告警，降低数据管道维护成本。",
    highlights: [
      { title: "托管连接器", description: "覆盖主流数据库、SaaS、事件与文件源，自动维护。" },
      { title: "增量与模式演进", description: "日志/增量同步，自动适配 schema 变化。" },
      { title: "调度与监控", description: "可配置刷新频率，失败告警与状态监控。" },
      { title: "仓库直连", description: "输出到 Snowflake/BigQuery/Redshift/Databricks 等。" },
    ],
    useCases: ["将业务数据集中到仓库", "减少自建管道运维", "实时/准实时分析", "支持 BI/指标与模型"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "ELT / Integration · Fivetran",
    title: "Fivetran: fully managed ELT pipelines",
    subtitle: "Rich connectors, scheduling, and incremental sync to your warehouse",
    description:
      "Fivetran delivers managed ELT from databases, SaaS, and event sources into cloud warehouses/lakes with incremental/log sync, automatic schema evolution, and monitoring/alerts to cut pipeline maintenance.",
    highlights: [
      { title: "Managed connectors", description: "Broad coverage of DBs, SaaS, events, and files with upkeep handled." },
      { title: "Incremental & schema change", description: "CDC/incremental sync with automatic schema evolution." },
      { title: "Scheduling & monitoring", description: "Configurable refresh, failure alerts, and status dashboards." },
      { title: "Warehouse native", description: "Targets Snowflake, BigQuery, Redshift, Databricks, and more." },
    ],
    useCases: ["Centralize business data", "Reduce pipeline maintenance", "Near-real-time analytics", "Fuel BI/metrics/models"],
    ctaVisit: "Visit Fivetran",
    ctaBack: "Back to home",
  },
};

export function FivetranPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
