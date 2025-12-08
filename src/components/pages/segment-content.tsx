import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://segment.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "ELT / 集成 · Segment",
    title: "Segment：CDP 与事件路由",
    subtitle: "多端事件收集，路由到仓库与下游工具，支持身份与受众",
    description:
      "Segment 是广泛使用的 CDP/事件管道，将多端数据采集后路由到数据仓库与营销、分析工具，支持身份解析、受众分发与实时数据流，方便统一数据与激活。",
    highlights: [
      { title: "多端采集", description: "Web/移动/后端/云端事件统一采集。" },
      { title: "路由与存储", description: "同步到仓库、湖与众多下游 SaaS/广告平台。" },
      { title: "身份与受众", description: "身份解析、分群与实时激活。" },
      { title: "合规与治理", description: "隐私控制、同意管理与数据过滤。" },
    ],
    useCases: ["统一事件管道", "CDP 受众运营", "营销与产品数据激活", "实时数据流/仓库同步"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "ELT / Integration · Segment",
    title: "Segment: CDP and event routing",
    subtitle: "Collect multi-platform events, route to warehouses and downstream tools with identity/audiences",
    description:
      "Segment is a popular CDP/event pipeline that collects data across platforms, routes it to warehouses and marketing/analytics tools, and supports identity resolution, audience activation, and real-time streams.",
    highlights: [
      { title: "Multi-platform collection", description: "Web, mobile, server, and cloud events unified." },
      { title: "Routing & storage", description: "Send to warehouses/lakes and many SaaS/ad destinations." },
      { title: "Identity & audiences", description: "Identity resolution, cohorts, and real-time activation." },
      { title: "Privacy & governance", description: "Consent controls, filtering, and data governance." },
    ],
    useCases: ["Unified event pipeline", "CDP audience activation", "Marketing/product data activation", "Real-time streaming to warehouse"],
    ctaVisit: "Visit Segment",
    ctaBack: "Back to home",
  },
};

export function SegmentPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
