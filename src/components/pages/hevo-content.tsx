import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://hevodata.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "ELT / 集成 · Hevo",
    title: "Hevo：无代码数据管道",
    subtitle: "多源到仓库/湖的实时与批量同步，内置监控告警",
    description:
      "Hevo 提供无代码 ELT/数据管道，支持数据库、SaaS、流式等多源，实时/批量写入云仓或数据湖，内置监控与告警，减少开发运维负担。",
    highlights: [
      { title: "无代码配置", description: "拖拽式管道，快速上手，减少工程投入。" },
      { title: "实时与批量", description: "支持实时/近实时同步与定时批量作业。" },
      { title: "监控与告警", description: "可视化监控、失败重试与告警通知。" },
      { title: "多源支持", description: "覆盖数据库、SaaS、事件、文件等场景。" },
    ],
    useCases: ["快速建仓入湖", "低代码数据集成", "实时/近实时分析", "减少管道运维成本"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "ELT / Integration · Hevo",
    title: "Hevo: no-code data pipelines",
    subtitle: "Real-time and batch sync from many sources to warehouses/lakes with monitoring",
    description:
      "Hevo delivers no-code ELT pipelines from DBs, SaaS, streams, and files into cloud warehouses/lakes with real-time or batch sync plus monitoring and alerts, cutting engineering overhead.",
    highlights: [
      { title: "No-code setup", description: "Drag-and-drop pipelines for fast onboarding." },
      { title: "Real-time & batch", description: "Near-real-time sync alongside scheduled batches." },
      { title: "Monitoring & alerts", description: "Dashboards, retries, and notifications on failures." },
      { title: "Broad sources", description: "DBs, SaaS, events, and files are covered." },
    ],
    useCases: ["Fast warehouse/lake loading", "Low-code integration", "Real-time/near-real-time analytics", "Lower pipeline ops cost"],
    ctaVisit: "Visit Hevo",
    ctaBack: "Back to home",
  },
};

export function HevoPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
