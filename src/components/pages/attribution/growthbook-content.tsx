import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.growthbook.io/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "实验 / 归因 · GrowthBook",
    title: "GrowthBook：开源 A/B 与特征旗标",
    subtitle: "自托管/云端，指标定义与多语言 SDK，安全实验",
    description:
      "GrowthBook 提供开源 A/B 测试与特征旗标，支持自托管或云端，内置指标与统计，适合需要可控与隐私的团队，同时提供多语言 SDK。",
    highlights: [
      { title: "开源与自托管", description: "满足隐私与合规，云端可托管。" },
      { title: "特征旗标", description: "灵活规则、细分与回滚控制曝光。" },
      { title: "指标与统计", description: "指标定义、显著性与可视化报告。" },
      { title: "多语言 SDK", description: "客户端/服务端 SDK 覆盖常见语言。" },
    ],
    useCases: ["自托管实验平台", "特征开关与灰度", "指标治理", "隐私敏感场景的实验"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Experimentation · GrowthBook",
    title: "GrowthBook: open-source A/B & feature flags",
    subtitle: "Self-host or cloud, metrics/analysis, multi-language SDKs",
    description:
      "GrowthBook delivers open-source A/B testing and feature flags with self-hosted or cloud options, built-in metrics/stats, and SDKs across platforms for privacy-conscious teams.",
    highlights: [
      { title: "Open-source/self-hosted", description: "Keep data control; hosted cloud also available." },
      { title: "Feature flags", description: "Rules, targeting, and rollbacks for safe releases." },
      { title: "Metrics & stats", description: "Define metrics with significance and reporting." },
      { title: "Multi-language SDKs", description: "Client/server SDK coverage for common stacks." },
    ],
    useCases: ["Self-hosted experimentation", "Feature toggles and rollout", "Metric governance", "Privacy-sensitive testing"],
    ctaVisit: "Visit GrowthBook",
    ctaBack: "Back to home",
  },
};

export function GrowthBookPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
