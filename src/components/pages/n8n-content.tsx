import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://n8n.io/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "自动化 / 集成 · n8n",
    title: "n8n：开源低代码自动化",
    subtitle: "可视化流程、Webhook 与丰富节点，支持自托管",
    description:
      "n8n 是开源低代码自动化与集成工具，提供可视化流程编排、Webhook、定时与上百个节点，支持自托管或云端，适合数据与运营团队构建事件驱动/批处理流程。",
    highlights: [
      { title: "开源与自托管", description: "自行部署满足隐私与合规，也有云服务。" },
      { title: "可视化编排", description: "拖拽式节点连接 API、数据库与第三方服务。" },
      { title: "触发器丰富", description: "Webhook、定时、队列与事件触发，灵活组合。" },
      { title: "扩展性", description: "可自定义节点与代码块，满足复杂逻辑。" },
    ],
    useCases: ["事件驱动自动化", "API/DB 集成", "数据同步与清洗", "运营与通知流程"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Automation / Integration · n8n",
    title: "n8n: open-source low-code automation",
    subtitle: "Visual workflows, webhooks, rich nodes, self-host or cloud",
    description:
      "n8n is an open-source automation platform with visual workflows, webhooks, schedulers, and hundreds of nodes. Self-host or use cloud to build event-driven and batch processes for data and ops teams.",
    highlights: [
      { title: "Open-source & self-host", description: "Deploy yourself for privacy/compliance, or use hosted cloud." },
      { title: "Visual orchestration", description: "Drag-and-drop nodes connecting APIs, DBs, and services." },
      { title: "Rich triggers", description: "Webhooks, schedules, queues, and events in flexible flows." },
      { title: "Extensible", description: "Custom nodes and code steps for advanced logic." },
    ],
    useCases: ["Event-driven automation", "API/DB integrations", "Data sync/cleanup", "Ops and notification flows"],
    ctaVisit: "Visit n8n",
    ctaBack: "Back to home",
  },
};

export function N8nPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
