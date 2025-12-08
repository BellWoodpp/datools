import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.statsig.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "实验 / 归因 · Statsig",
    title: "Statsig：实验与特征管理",
    subtitle: "统计引擎、特征旗标、指标框架与快速回滚",
    description:
      "Statsig 提供实验平台与特征管理，内置统计引擎、指标框架与仪表板，支持特征旗标、快速回滚与规则，帮助产品团队安全发布与评估影响。",
    highlights: [
      { title: "特征旗标", description: "控制曝光与规则，快速开关与回滚。" },
      { title: "统计与指标", description: "内置统计引擎与指标定义，自动计算显著性。" },
      { title: "实验分析", description: "多维拆解、留存/转化指标评估。" },
      { title: "集成与 SDK", description: "多语言 SDK，易集成客户端/服务端。" },
    ],
    useCases: ["安全发布与回滚", "产品实验与评估", "指标治理与监控", "多端特征管理"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Experimentation · Statsig",
    title: "Statsig: experimentation & feature management",
    subtitle: "Stats engine, feature flags, metrics framework, and fast rollback",
    description:
      "Statsig provides experimentation and feature management with a stats engine, metrics framework, dashboards, feature flags, and quick rollbacks to safely ship and measure impact.",
    highlights: [
      { title: "Feature flags", description: "Rules-based exposure with fast toggles and rollbacks." },
      { title: "Stats & metrics", description: "Built-in stats engine and metric definitions with significance." },
      { title: "Experiment insights", description: "Breakdowns across dimensions with retention/conversion metrics." },
      { title: "SDKs & integration", description: "Multi-language SDKs for client/server integration." },
    ],
    useCases: ["Safe launches and rollback", "Product experimentation", "Metric governance and monitoring", "Cross-platform feature control"],
    ctaVisit: "Visit Statsig",
    ctaBack: "Back to home",
  },
};

export function StatsigPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
