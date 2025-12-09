import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.abtasty.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "实验 / 归因 · AB Tasty",
    title: "AB Tasty：体验优化与实验",
    subtitle: "A/B、个性化、特征旗标与行为洞察",
    description:
      "AB Tasty 提供 A/B 与多变量测试、个性化与特征旗标，并附带行为分析，帮助团队优化数字体验与转化。",
    highlights: [
      { title: "实验能力", description: "A/B、多变量、拆分 URL 等测试方式。" },
      { title: "特征旗标", description: "安全发布与回滚，控制新功能曝光。" },
      { title: "个性化", description: "基于受众/行为的定制体验。" },
      { title: "行为洞察", description: "附带行为分析，评估影响与机会。" },
    ],
    useCases: ["体验与转化优化", "安全灰度发布", "个性化投放", "多端实验管理"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Experimentation · AB Tasty",
    title: "AB Tasty: experience optimization",
    subtitle: "A/B, personalization, feature flags, and behavioral insights",
    description:
      "AB Tasty offers A/B and multivariate tests, personalization, and feature flags with behavioral insights to optimize digital experiences.",
    highlights: [
      { title: "Experimentation", description: "A/B, multivariate, and split URL testing." },
      { title: "Feature flags", description: "Safe launches and rollbacks controlling exposure." },
      { title: "Personalization", description: "Audience/behavior-based experiences." },
      { title: "Behavior insights", description: "Built-in analytics to gauge impact." },
    ],
    useCases: ["Experience and conversion optimization", "Safe feature rollout", "Personalized delivery", "Cross-platform experiments"],
    ctaVisit: "Visit AB Tasty",
    ctaBack: "Back to home",
  },
};

export function ABTastyPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
