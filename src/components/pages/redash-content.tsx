import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://redash.io/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "BI / 可视化 · Redash",
    title: "Redash：SQL 驱动的轻量 BI",
    subtitle: "写 SQL、保存查询、可视化与仪表板，支持计划刷新与分享",
    description:
      "Redash 是轻量级的 SQL 驱动 BI 工具，支持多数据源，查询结果可直接可视化并组合成仪表板。提供查询参数、定时任务、警报与分享链接，适合数据团队与产品/运营快速取数和展示。",
    highlights: [
      { title: "多数据源 SQL", description: "连接主流数据库与仓库，统一查询与结果缓存。" },
      { title: "快速可视化", description: "查询结果一键生成图表，支持参数化查询与下钻。" },
      { title: "仪表板与分享", description: "组合查询图表成 Dashboard，公共/私有分享与嵌入。" },
      { title: "定时与告警", description: "定时刷新、阈值告警，结果推送到邮件/Slack 等渠道。" },
    ],
    useCases: ["轻量自助取数", "运营/产品指标看板", "数据查询与分享", "快速验证与探索"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "BI / Visualization · Redash",
    title: "Redash: SQL-first lightweight BI",
    subtitle: "Write SQL, visualize, build dashboards with scheduling and sharing",
    description:
      "Redash is a lightweight SQL-first BI tool connecting to many data sources. Queries turn into charts and dashboards with parameters, schedules, alerts, and sharing/embedding, great for quick pulls and ops/product metrics.",
    highlights: [
      { title: "Multi-source SQL", description: "Query popular databases/warehouses with caching and parameters." },
      { title: "Fast visuals", description: "Turn results into charts quickly; supports filters and drill-down." },
      { title: "Dashboards & sharing", description: "Assemble charts into dashboards; share or embed securely." },
      { title: "Schedules & alerts", description: "Scheduled refresh and threshold alerts to email/Slack, etc." },
    ],
    useCases: ["Self-service queries", "Ops/product dashboards", "Sharing quick analyses", "Rapid exploration/validation"],
    ctaVisit: "Visit Redash",
    ctaBack: "Back to home",
  },
};

export function RedashPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
