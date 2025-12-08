import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://tray.io/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "iPaaS / 自动化 · Tray.io",
    title: "Tray.io：低代码 API 与事件编排",
    subtitle: "可视化集成、触发器与多步工作流，面向业务与工程团队",
    description:
      "Tray.io 是低代码 iPaaS，提供可视化流程、API/事件触发器与多步工作流，连接大量 SaaS 与数据源，支持循环、条件与调试，适合业务团队与工程团队协作构建集成与自动化。",
    highlights: [
      { title: "可视化工作流", description: "拖拽式步骤搭建复杂逻辑，含循环/条件/分支。" },
      { title: "广泛连接器", description: "覆盖主流 SaaS 与 API，减少自建集成。" },
      { title: "事件与定时触发", description: "Webhook、事件、定时与队列驱动流程。" },
      { title: "协作与治理", description: "环境/凭证管理、日志与权限控制。" },
    ],
    useCases: ["跨 SaaS 数据流转", "业务自动化工作流", "API 集成加速", "事件驱动运营/通知"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "iPaaS / Automation · Tray.io",
    title: "Tray.io: low-code API and event orchestration",
    subtitle: "Visual integrations, triggers, and multi-step workflows for biz/eng teams",
    description:
      "Tray.io is a low-code iPaaS with visual workflows, API/event triggers, and multi-step logic connecting many SaaS and data sources. It supports loops, conditions, debugging, and governance for collaborative automation.",
    highlights: [
      { title: "Visual workflows", description: "Drag-and-drop steps with loops/branches for complex logic." },
      { title: "Broad connectors", description: "Major SaaS/API coverage to reduce custom integration." },
      { title: "Triggers & schedules", description: "Webhooks, events, and cron/queue-driven flows." },
      { title: "Collaboration & governance", description: "Environment/credential management, logs, and permissions." },
    ],
    useCases: ["Cross-SaaS data flows", "Business automation workflows", "Accelerated API integrations", "Event-driven ops/notifications"],
    ctaVisit: "Visit Tray.io",
    ctaBack: "Back to home",
  },
};

export function TrayIoPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
