import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://amplitude.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "产品分析 · Amplitude",
    title: "Amplitude：增长与行为分析",
    subtitle: "事件采集、漏斗、留存、群组与实验，服务增长与产品决策",
    description:
      "Amplitude 是面向增长与产品团队的行为分析平台，支持事件采集、漏斗、留存、群组分析、路径与实验（A/B）。可用于用户分群、激活/留存提升、功能迭代评估与运营增长。",
    highlights: [
      { title: "事件与属性", description: "灵活事件/用户属性建模，支持多端数据汇总。" },
      { title: "漏斗与留存", description: "核心转化路径与留存表现一目了然，支持分群与下钻。" },
      { title: "群组与推荐", description: "群组分析、相似度/影响因素探索，识别增长杠杆。" },
      { title: "实验与协作", description: "A/B 测试、看板分享与权限控制，支持跨团队协作。" },
    ],
    useCases: ["激活/留存/付费漏斗", "增长实验与功能评估", "用户分群与精准运营", "多端行为洞察"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Product Analytics · Amplitude",
    title: "Amplitude: growth & behavior analytics",
    subtitle: "Events, funnels, retention, cohorts, and experiments for product decisions",
    description:
      "Amplitude provides behavior analytics for growth and product teams with event tracking, funnels, retention, cohorts, paths, and experimentation. It helps with activation, retention, feature evaluation, and targeted engagement across platforms.",
    highlights: [
      { title: "Events & properties", description: "Flexible event/user properties with multi-platform ingestion." },
      { title: "Funnels & retention", description: "Track conversion paths and retention with cohorts and drill-downs." },
      { title: "Cohorts & insights", description: "Cohort analysis plus drivers/similarity to find growth levers." },
      { title: "Experiments & sharing", description: "A/B testing, dashboards, and permissions for team collaboration." },
    ],
    useCases: ["Activation/retention/payment funnels", "Growth experiments", "User cohorts for engagement", "Cross-platform behavior insights"],
    ctaVisit: "Visit Amplitude",
    ctaBack: "Back to home",
  },
};

export function AmplitudePageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
