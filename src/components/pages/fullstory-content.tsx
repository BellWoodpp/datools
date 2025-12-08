import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.fullstory.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "产品分析 · FullStory",
    title: "FullStory：体验分析与 Session 回放",
    subtitle: "记录行为、路径与体验问题，支持漏斗、留存与告警",
    description:
      "FullStory 聚焦数字体验分析，提供 Session 回放、事件/路径、漏斗与留存，帮助发现性能、UI 与转化问题，并支持告警与协作。适合产品、增长与前端团队定位体验瓶颈。",
    highlights: [
      { title: "Session 回放", description: "还原用户操作，定位异常与体验问题。" },
      { title: "路径与漏斗", description: "分析常见路径、掉队点与转化瓶颈。" },
      { title: "指标与告警", description: "关键指标波动触发告警，及时发现问题。" },
      { title: "协作与治理", description: "标注、分享与权限控制，便于跨团队协同。" },
    ],
    useCases: ["体验问题排查", "转化漏斗优化", "性能/异常监测", "支持团队协作定位问题"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Product Analytics · FullStory",
    title: "FullStory: experience analytics & session replay",
    subtitle: "Replay, journeys, funnels, retention, and alerts to find UX and conversion issues",
    description:
      "FullStory focuses on digital experience analytics with session replay, events/journeys, funnels, retention, and alerts to uncover UX, performance, and conversion issues for product, growth, and frontend teams.",
    highlights: [
      { title: "Session replay", description: "Recreate user actions to diagnose UX and errors." },
      { title: "Journeys & funnels", description: "See common paths and drop-offs to optimize conversion." },
      { title: "Metrics & alerts", description: "Monitor KPI shifts and trigger alerts when issues arise." },
      { title: "Collaboration & control", description: "Notes, sharing, and permissions to work across teams." },
    ],
    useCases: ["UX issue diagnosis", "Conversion funnel optimization", "Performance/anomaly monitoring", "Collaboration on support/bugs"],
    ctaVisit: "Visit FullStory",
    ctaBack: "Back to home",
  },
};

export function FullStoryPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
