import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.pendo.io/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "产品分析 · Pendo",
    title: "Pendo：产品体验与分析",
    subtitle: "应用内引导、反馈收集与行为分析，提升留存与转化",
    description:
      "Pendo 将产品分析与应用内体验结合，提供行为追踪、漏斗/留存、应用内引导、NPS/反馈收集和消息推送，帮助产品团队提升用户激活、采用与留存。",
    highlights: [
      { title: "行为分析", description: "事件、漏斗、留存与路径，衡量功能采用与留存。" },
      { title: "应用内引导", description: "无需发布即可配置提示、导览与消息，提升采用率。" },
      { title: "反馈与 NPS", description: "应用内调研与反馈，收集用户声音用于决策。" },
      { title: "分群与定位", description: "按角色/分群定向引导与消息，精细化运营。" },
    ],
    useCases: ["功能采用提升", "新手引导与激活", "留存与转化优化", "用户反馈闭环"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Product Analytics · Pendo",
    title: "Pendo: product experience + analytics",
    subtitle: "In-app guides, feedback, and behavior analytics to drive adoption and retention",
    description:
      "Pendo combines product analytics with in-app experiences: event tracking, funnels/retention, in-app guides, NPS/feedback, and messaging to improve activation, adoption, and retention.",
    highlights: [
      { title: "Behavior analytics", description: "Events, funnels, retention, and paths for feature adoption." },
      { title: "In-app guides", description: "No-code tours, tooltips, and messages without redeploying." },
      { title: "Feedback & NPS", description: "In-app surveys and feedback to capture user voice." },
      { title: "Segmentation & targeting", description: "Role/cohort targeting for guides and messages." },
    ],
    useCases: ["Feature adoption", "Onboarding and activation", "Retention and conversion", "Feedback loops"],
    ctaVisit: "Visit Pendo",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "プロダクト分析 · Pendo",
    title: "Pendo：プロダクト体験と分析",
    subtitle: "インアプリガイド、フィードバック、行動分析で採用とリテンションを向上",
    description:
      "Pendo はインアプリガイド、フィードバック、行動分析を提供し、プロダクトの採用とリテンションを高めます。",
    highlights: [
      { title: "インアプリガイド", description: "アプリ内でチュートリアルやバナーを表示。" },
      { title: "フィードバック収集", description: "ユーザーの声を集め、改善に活用。" },
      { title: "行動分析", description: "イベントや機能利用を把握し、改善箇所を特定。" },
      { title: "セグメント/配信", description: "対象ユーザーを絞り、適切なタイミングで案内。" },
    ],
    useCases: ["採用/リテンション向上", "オンボーディング改善", "ユーザーフィードバック収集", "機能利用の分析"],
    ctaVisit: "公式サイトを見る",
    ctaBack: "ホームへ戻る",
  },
};

export function PendoPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
