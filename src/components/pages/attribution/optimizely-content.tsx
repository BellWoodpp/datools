import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.optimizely.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "实验 / 归因 · Optimizely",
    title: "Optimizely：实验与个性化平台",
    subtitle: "A/B、多变量测试、特征旗标与目标管理",
    description:
      "Optimizely 是老牌实验与数字体验平台，提供 A/B 和多变量测试、特征旗标、个性化与目标管理，支持服务器端与客户端实验，服务产品增长与转化优化。",
    highlights: [
      { title: "多端实验", description: "Web/移动/后端实验与特征开关，灵活回滚。" },
      { title: "个性化", description: "基于受众与规则的体验定制，提高转化。" },
      { title: "指标与目标", description: "集中管理指标与目标，评估实验影响。" },
      { title: "治理与合规", description: "权限、审计与隐私控制，适合企业使用。" },
    ],
    useCases: ["转化率优化", "功能灰度与回滚", "个性化体验", "多端实验统一管理"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Experimentation · Optimizely",
    title: "Optimizely: experimentation & personalization",
    subtitle: "A/B, multivariate, feature flags, and objective management",
    description:
      "Optimizely offers web/mobile/server experimentation, feature flags, personalization, and centralized objectives for growth and conversion optimization.",
    highlights: [
      { title: "Cross-platform experiments", description: "Web, mobile, and server tests with feature toggles and rollbacks." },
      { title: "Personalization", description: "Audience- and rule-based experiences to lift conversions." },
      { title: "Metrics & objectives", description: "Central metric management to evaluate impact." },
      { title: "Governance", description: "Permissions, audit, and privacy controls for enterprises." },
    ],
    useCases: ["CRO", "Feature rollout and rollback", "Personalized experiences", "Unified experimentation"],
    ctaVisit: "Visit Optimizely",
    ctaBack: "Back to home",
  },
};

export function OptimizelyPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
