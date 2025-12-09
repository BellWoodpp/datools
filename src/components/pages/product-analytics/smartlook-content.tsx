import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.smartlook.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "产品分析 · Smartlook",
    title: "Smartlook：体验回放与行为分析",
    subtitle: "Session 回放、漏斗、热力图与事件追踪，定位体验与转化问题",
    description:
      "Smartlook 提供 Session 回放、漏斗、热力图和事件跟踪，帮助团队发现体验障碍、转化掉队点与 UI 问题。适用于网页与移动端的产品分析与体验优化。",
    highlights: [
      { title: "Session 回放", description: "还原用户操作，定位异常与体验痛点。" },
      { title: "漏斗与路径", description: "分析转化漏斗与常见路径，发现掉队节点。" },
      { title: "热力图", description: "可视化点击/滚动热力，评估交互与布局。" },
      { title: "事件追踪", description: "灵活定义事件，结合回放与分群深入分析。" },
    ],
    useCases: ["转化率优化", "体验问题排查", "界面可用性评估", "移动端与网页行为洞察"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Product Analytics · Smartlook",
    title: "Smartlook: replay and behavior analytics",
    subtitle: "Session replay, funnels, heatmaps, and events to fix UX and conversion issues",
    description:
      "Smartlook delivers session replay, funnels, heatmaps, and event tracking to uncover experience blockers, drop-offs, and UI issues across web and mobile products.",
    highlights: [
      { title: "Session replay", description: "Rewatch user actions to spot anomalies and pain points." },
      { title: "Funnels & paths", description: "Track conversions and paths to find where users drop." },
      { title: "Heatmaps", description: "Visualize clicks/scrolls to assess interactions and layout." },
      { title: "Event tracking", description: "Define events and analyze with cohorts plus replays." },
    ],
    useCases: ["Conversion rate optimization", "UX issue troubleshooting", "Usability assessment", "Web/mobile behavior insights"],
    ctaVisit: "Visit Smartlook",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "プロダクト分析 · Smartlook",
    title: "Smartlook：体験・行動分析",
    subtitle: "セッションリプレイ、ファネル、ヒートマップ、イベント追跡で UX を改善",
    description:
      "Smartlook はセッションリプレイ、ファネル、ヒートマップ、イベント追跡を提供し、UX とコンバージョンの課題を発見します。",
    highlights: [
      { title: "セッションリプレイ", description: "行動を再生し、問題箇所を把握。" },
      { title: "ファネル", description: "離脱ポイントを特定。" },
      { title: "ヒートマップ", description: "クリック/スクロールの分布を可視化。" },
      { title: "イベント追跡", description: "重要イベントをトラッキングし、変化を検知。" },
    ],
    useCases: ["UX 改善", "コンバージョン最適化", "バグ・摩擦点の発見", "行動変化のモニタリング"],
    ctaVisit: "公式サイトを見る",
    ctaBack: "ホームへ戻る",
  },
};

export function SmartlookPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
