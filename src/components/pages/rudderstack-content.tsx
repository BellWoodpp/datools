import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.rudderstack.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "ELT / 集成 · RudderStack",
    title: "RudderStack：开源 CDP 与事件路由",
    subtitle: "兼容 Segment API，可自托管或云端，将事件送仓库与下游工具",
    description:
      "RudderStack 是开源 CDP/事件管道，兼容 Segment API，可自托管或使用云服务。支持多端事件采集、路由到仓库与营销/分析工具，适合希望可控与私有化的团队。",
    highlights: [
      { title: "开源与自托管", description: "自托管满足合规与成本控制，也有托管云版。" },
      { title: "Segment 兼容", description: "API 兼容 Segment，迁移成本低。" },
      { title: "仓库优先", description: "事件同步到仓库/湖再分发下游，数据可控。" },
      { title: "实时路由", description: "实时/批量分发，覆盖众多目的地。" },
    ],
    useCases: ["私有化 CDP", "事件路由到仓库", "Segment 兼容迁移", "实时数据激活"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "ELT / Integration · RudderStack",
    title: "RudderStack: open-source CDP/event routing",
    subtitle: "Segment-compatible, self-hosted or cloud, warehouse-first event delivery",
    description:
      "RudderStack is an open-source CDP/event pipeline compatible with Segment APIs. Self-host or use the cloud to collect events, route them to warehouses/lakes, and forward to marketing/analytics destinations with warehouse-first control.",
    highlights: [
      { title: "Open-source & self-host", description: "Meet compliance and cost needs, or use managed cloud." },
      { title: "Segment compatible", description: "API compatibility lowers migration friction." },
      { title: "Warehouse-first", description: "Sync to warehouse/lake before downstream activation." },
      { title: "Real-time routing", description: "Real-time/batch delivery to many destinations." },
    ],
    useCases: ["Self-hosted CDP", "Event routing to warehouses", "Segment-compatible migration", "Real-time activation"],
    ctaVisit: "Visit RudderStack",
    ctaBack: "Back to home",
  },
};

export function RudderStackPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
