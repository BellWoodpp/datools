import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://heap.io/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "产品分析 · Heap",
    title: "Heap：自动采集的产品分析",
    subtitle: "无须预埋点的事件采集，支持漏斗、留存与路径分析",
    description:
      "Heap 主打自动采集（autocapture），无需预埋点即可获取点击、页面与表单等事件，帮助团队快速构建漏斗、留存、路径和分群分析，用于产品优化与增长。",
    highlights: [
      { title: "自动采集", description: "免预埋点捕获核心行为，降低实施成本。" },
      { title: "漏斗与留存", description: "快速构建转化与留存分析，支持分段与下钻。" },
      { title: "路径与探索", description: "可视化路径与行为探索，找到异常和机会点。" },
      { title: "治理与重放", description: "事件整理、定义与回溯，提升数据可用性。" },
    ],
    useCases: ["快速搭建产品数据", "转化与留存分析", "行为路径探索", "增长与体验优化"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Product Analytics · Heap",
    title: "Heap: autocapture product analytics",
    subtitle: "No-instrument event capture with funnels, retention, and pathing",
    description:
      "Heap focuses on autocapture, collecting clicks, pages, and forms without upfront instrumentation. Teams rapidly build funnels, retention, paths, and cohorts for product optimization and growth.",
    highlights: [
      { title: "Autocapture", description: "Capture key behaviors without pre-tagging to speed implementation." },
      { title: "Funnels & retention", description: "Build conversion and retention views with segments and drill-downs." },
      { title: "Paths & exploration", description: "Visual pathing to uncover anomalies and opportunities." },
      { title: "Governance & history", description: "Define/clean events with backfill to improve data usability." },
    ],
    useCases: ["Fast setup of product data", "Conversion and retention analysis", "Behavior path exploration", "Growth and UX optimization"],
    ctaVisit: "Visit Heap",
    ctaBack: "Back to home",
  },
};

export function HeapPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
