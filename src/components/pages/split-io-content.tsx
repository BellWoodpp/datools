import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.split.io/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "实验 / 归因 · Split.io",
    title: "Split.io：特征旗标与实验",
    subtitle: "特征管理、指标监控与回滚，面向工程与产品团队",
    description:
      "Split.io 提供特征旗标、实验与指标监控，支持回滚、规则与权限，帮助工程与产品团队安全地发布、观测和优化功能。",
    highlights: [
      { title: "特征旗标", description: "精细的曝光与分流控制，支持回滚。" },
      { title: "实验与指标", description: "指标监控与因果分析，评估功能影响。" },
      { title: "治理与权限", description: "角色与审计，确保安全合规。" },
      { title: "SDK 与集成", description: "多语言 SDK 与数据平台集成。" },
    ],
    useCases: ["安全发布与回滚", "功能实验与监控", "指标驱动迭代", "工程/产品协同"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Experimentation · Split.io",
    title: "Split.io: feature flags and experiments",
    subtitle: "Feature management, metrics monitoring, and rollbacks",
    description:
      "Split.io delivers feature flagging, experimentation, and metric monitoring with rollbacks, rules, and governance so product and engineering teams ship safely.",
    highlights: [
      { title: "Feature flags", description: "Granular targeting and rollout with rollback controls." },
      { title: "Experiments & metrics", description: "Monitor impact with metrics and causal analysis." },
      { title: "Governance", description: "Roles and audit for secure operations." },
      { title: "SDKs & integrations", description: "Multi-language SDKs and data platform hooks." },
    ],
    useCases: ["Safe releases and rollback", "Feature experiments", "Metric-driven iteration", "Product/engineering collaboration"],
    ctaVisit: "Visit Split.io",
    ctaBack: "Back to home",
  },
};

export function SplitIoPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
