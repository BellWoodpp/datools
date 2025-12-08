import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.june.so/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "产品分析 · June",
    title: "June：SaaS 指标仪表板",
    subtitle: "基于事件的 SaaS 报表，涵盖漏斗、留存、活跃与增长指标",
    description:
      "June 聚焦 SaaS 产品指标，基于事件数据自动生成常用报表，如活跃、留存、漏斗、增长与团队协作看板，帮助快速搭建管理层与产品运营的指标视图。",
    highlights: [
      { title: "SaaS 指标模板", description: "活跃、留存、激活、付费等常用报表开箱即用。" },
      { title: "漏斗与留存", description: "快速查看关键转化与留存表现，支持分群对比。" },
      { title: "仪表板与分享", description: "面向团队/管理层的共享看板，支持权限控制。" },
      { title: "连接与同步", description: "与事件数据平台/仓库衔接，保持数据一致。" },
    ],
    useCases: ["SaaS 增长指标看板", "团队周报/月报自动化", "活跃/留存/付费追踪", "管理层快速对齐"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Product Analytics · June",
    title: "June: SaaS metrics dashboards",
    subtitle: "Event-based SaaS reports for activation, retention, funnels, and growth",
    description:
      "June focuses on SaaS product metrics, generating ready-to-use reports for activation, retention, funnels, and growth. It builds team and exec dashboards quickly on top of your event data.",
    highlights: [
      { title: "SaaS templates", description: "Out-of-the-box reports for active users, retention, activation, and revenue." },
      { title: "Funnels & retention", description: "Key conversion and retention views with cohort comparisons." },
      { title: "Dashboards & sharing", description: "Team/exec dashboards with sharing and permissions." },
      { title: "Data connections", description: "Connects to event pipelines/warehouses to stay in sync." },
    ],
    useCases: ["SaaS growth dashboards", "Automated weekly/monthly reports", "Activation/retention/revenue tracking", "Fast exec alignment"],
    ctaVisit: "Visit June",
    ctaBack: "Back to home",
  },
};

export function JunePageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
