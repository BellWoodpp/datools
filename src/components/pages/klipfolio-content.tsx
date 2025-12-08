import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.klipfolio.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "BI / 可视化 · Klipfolio",
    title: "Klipfolio：KPI 仪表板与数据监控",
    subtitle: "拖拽式仪表板构建，丰富 SaaS/数据库连接器与实时刷新",
    description:
      "Klipfolio 专注 KPI 仪表板与业务监控，提供拖拽式组件、丰富的 SaaS/API/数据库连接器、定时/实时刷新和共享嵌入。适合市场、运营、财务等团队快速搭建管理看板。",
    highlights: [
      { title: "KPI 仪表板", description: "预置组件与公式，快速搭建指标卡、图表与汇总。" },
      { title: "丰富连接器", description: "覆盖常见 SaaS、数据库与 API，自定义数据源支持。" },
      { title: "刷新与告警", description: "定时/实时刷新，阈值告警，邮件/Slack 推送。" },
      { title: "共享与嵌入", description: "支持链接分享、权限控制与嵌入式展示。" },
    ],
    useCases: ["管理/高管 KPI 看板", "市场与运营监控", "实时指标追踪", "多来源数据汇总展示"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "BI / Visualization · Klipfolio",
    title: "Klipfolio: KPI dashboards & monitoring",
    subtitle: "Drag-and-drop dashboards with rich SaaS/API/database connectors and refresh",
    description:
      "Klipfolio focuses on KPI dashboards and business monitoring with drag-and-drop components, extensive SaaS/API/database connectors, scheduled/real-time refresh, and sharing/embedding. Great for marketing, ops, and finance teams to build exec-ready boards quickly.",
    highlights: [
      { title: "KPI dashboards", description: "Prebuilt components and formulas to compose metric cards and charts fast." },
      { title: "Broad connectors", description: "Covers major SaaS, databases, and APIs with custom data sources." },
      { title: "Refresh & alerts", description: "Scheduled or real-time refresh with threshold alerts to email/Slack." },
      { title: "Sharing & embed", description: "Link sharing, permissions, and embeddable dashboards." },
    ],
    useCases: ["Executive KPI boards", "Marketing/ops monitoring", "Real-time metric tracking", "Aggregating multi-source data"],
    ctaVisit: "Visit Klipfolio",
    ctaBack: "Back to home",
  },
};

export function KlipfolioPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
