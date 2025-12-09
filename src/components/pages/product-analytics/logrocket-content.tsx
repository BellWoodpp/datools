import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://logrocket.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "产品分析 · LogRocket",
    title: "LogRocket：前端监控与体验分析",
    subtitle: "Session 回放 + 性能监控 + 行为分析，定位前端与体验问题",
    description:
      "LogRocket 结合 Session 回放、前端性能监控与产品行为分析，帮助团队快速定位 UI/性能问题、转化掉队点与错误。支持错误聚合、网络请求、状态变化记录以及漏斗与分群分析。",
    highlights: [
      { title: "Session 回放", description: "还原用户操作与 UI 状态，辅助问题定位。" },
      { title: "前端性能与错误", description: "监控性能指标、JS 错误、网络请求与日志。" },
      { title: "漏斗与行为", description: "分析路径、漏斗、分群，理解行为影响。" },
      { title: "诊断与告警", description: "错误聚合、智能分组与告警，提升响应速度。" },
    ],
    useCases: ["前端问题排查", "性能与错误监控", "转化与行为分析", "客户支持回放定位"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Product Analytics · LogRocket",
    title: "LogRocket: frontend monitoring + experience analytics",
    subtitle: "Session replay with performance/error monitoring and behavior insights",
    description:
      "LogRocket combines session replay, frontend performance/error monitoring, and behavior analytics to debug UI/UX issues, conversion drop-offs, and errors. It captures network requests, state changes, and supports funnels and cohorts.",
    highlights: [
      { title: "Session replay", description: "Reproduce user actions and UI state for debugging." },
      { title: "Perf & errors", description: "Monitor performance metrics, JS errors, network requests, and logs." },
      { title: "Funnels & behavior", description: "Pathing, funnels, and cohorts to link behavior with outcomes." },
      { title: "Diagnostics & alerts", description: "Error aggregation, grouping, and alerts to respond fast." },
    ],
    useCases: ["Frontend bug fixing", "Performance/error monitoring", "Conversion and behavior analysis", "Support with replay context"],
    ctaVisit: "Visit LogRocket",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "プロダクト分析 · LogRocket",
    title: "LogRocket：フロントエンド監視 + 体験分析",
    subtitle: "セッションリプレイ、パフォーマンス、行動インサイトを統合",
    description:
      "LogRocket はフロントエンド監視とプロダクト体験分析を組み合わせ、セッションリプレイ、パフォーマンス計測、行動インサイトを提供します。",
    highlights: [
      { title: "セッションリプレイ", description: "UI 上の行動を再生し、問題を特定。" },
      { title: "パフォーマンス監視", description: "性能指標を計測し、劣化を検知。" },
      { title: "行動インサイト", description: "ユーザー行動を分析し、改善点を抽出。" },
      { title: "アラートと共有", description: "異常を通知し、チームで共有できる。" },
    ],
    useCases: ["UX/性能改善", "バグ調査", "コンバージョン改善", "フロントエンドの品質モニタリング"],
    ctaVisit: "公式サイトを見る",
    ctaBack: "ホームへ戻る",
  },
};

export function LogRocketPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
