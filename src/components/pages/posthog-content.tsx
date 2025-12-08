import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://posthog.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "产品分析 · PostHog",
    title: "PostHog：开源产品分析与埋点平台",
    subtitle: "事件、漏斗、留存、Session 回放、Feature Flags 与 A/B 测试，可自托管",
    description:
      "PostHog 提供开源的产品分析套件，覆盖事件埋点、漏斗、留存、路径、Session 回放、Feature Flags 与 A/B 实验，并支持自托管/云端。适合关注隐私与可控性的团队。",
    highlights: [
      { title: "全功能产品分析", description: "事件、漏斗、留存、路径与分群一体化。" },
      { title: "体验与实验", description: "Session 回放、Feature Flags、A/B 测试与热力图（部分计划）。" },
      { title: "开源可自托管", description: "满足合规与私有化需求，同时提供云服务选项。" },
      { title: "插件与集成", description: "插件生态与多数据源集成，灵活扩展。" },
    ],
    useCases: ["合规/私有化产品分析", "功能迭代与实验", "体验问题定位", "增长与留存监测"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Product Analytics · PostHog",
    title: "PostHog: open-source product analytics",
    subtitle: "Events, funnels, retention, session replay, feature flags, and A/B testing; self-host or cloud",
    description:
      "PostHog delivers an open-source product analytics suite: events, funnels, retention, paths, session replay, feature flags, and A/B testing, with self-hosted and cloud options for privacy and control.",
    highlights: [
      { title: "Full product analytics", description: "Events, funnels, retention, paths, and cohorts together." },
      { title: "Experience & experiments", description: "Session replay, feature flags, A/B testing, and heatmaps (plans vary)." },
      { title: "Self-hostable OSS", description: "Meets compliance and privacy needs, plus a managed cloud." },
      { title: "Plugins & integrations", description: "Plugin ecosystem and connectors for flexible extension." },
    ],
    useCases: ["Compliance/self-hosted analytics", "Feature iteration and experiments", "Experience issue diagnosis", "Growth and retention tracking"],
    ctaVisit: "Visit PostHog",
    ctaBack: "Back to home",
  },
};

export function PostHogPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
