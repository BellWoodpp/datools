import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://mixpanel.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "产品分析 · Mixpanel",
    title: "Mixpanel：事件与留存分析",
    subtitle: "漏斗、留存、群组与信号分析，帮助优化产品与增长",
    description:
      "Mixpanel 是事件驱动的产品分析工具，支持漏斗、留存、群组、路径与信号分析。可用于激活、留存、转化和功能优化，帮助团队快速定位影响指标的行为。",
    highlights: [
      { title: "漏斗与留存", description: "核心转化与留存表现实时可查，支持分段对比。" },
      { title: "群组与探索", description: "分群、路径与信号分析，定位驱动/阻碍因素。" },
      { title: "灵活埋点", description: "事件/属性模型灵活，支持多端数据与实时查询。" },
      { title: "分享与嵌入", description: "看板共享、嵌入与权限控制，方便团队协作。" },
    ],
    useCases: ["激活/留存/付费漏斗", "功能上线效果评估", "用户分群运营", "增长实验监测"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Product Analytics · Mixpanel",
    title: "Mixpanel: event-based analytics",
    subtitle: "Funnels, retention, cohorts, and signal analysis for product growth",
    description:
      "Mixpanel is an event-driven analytics platform with funnels, retention, cohorts, pathing, and signal analysis. It helps teams measure activation, retention, conversion, and feature impact across platforms.",
    highlights: [
      { title: "Funnels & retention", description: "Monitor conversion and retention with segment comparisons." },
      { title: "Cohorts & signals", description: "Cohort, path, and signal analysis to find drivers and blockers." },
      { title: "Flexible tracking", description: "Rich event/property modeling with real-time queries." },
      { title: "Sharing & embeds", description: "Dashboards, sharing, embeds, and permissions for teams." },
    ],
    useCases: ["Activation/retention/payment funnels", "Feature launch evaluation", "Cohort-based engagement", "Growth experiment tracking"],
    ctaVisit: "Visit Mixpanel",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "プロダクト分析 · Mixpanel",
    title: "Mixpanel：イベントベースのプロダクト分析",
    subtitle: "ファネル、リテンション、コホート、シグナル分析で最適化",
    description:
      "Mixpanel はイベントベースのプロダクト分析で、ファネル、リテンション、コホート、シグナル分析を提供し、最適化を支援します。",
    highlights: [
      { title: "イベント & ファネル", description: "行動をイベントで追跡し、ファネルで課題を可視化。" },
      { title: "リテンション", description: "継続率を分析し、改善策を検討。" },
      { title: "コホート/シグナル", description: "セグメント別の変化や兆候を把握。" },
      { title: "データ連携", description: "他サービスとのインテグレーションを多数サポート。" },
    ],
    useCases: ["オンボーディングと成長の改善", "機能評価", "セグメント分析", "プロダクト最適化"],
    ctaVisit: "公式サイトを見る",
    ctaBack: "ホームへ戻る",
  },
};

export function MixpanelPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
