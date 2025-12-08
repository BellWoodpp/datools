import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.alation.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "数据治理 · Alation",
    title: "Alation：数据目录与治理",
    subtitle: "搜索、血缘、策略与协作，提升数据可发现性与合规",
    description:
      "Alation 提供企业数据目录，支持搜索、血缘、策略与协作，帮助团队更快找到可信数据，推动数据文化与治理落地。",
    highlights: [
      { title: "强搜索", description: "自然语言搜索与推荐，快速找到相关数据。" },
      { title: "血缘与策略", description: "可视化血缘与策略应用，理解上下游影响。" },
      { title: "协作与注释", description: "拥有者、评论与文档化，促进共享。" },
      { title: "合规支持", description: "策略与访问控制，符合企业合规需求。" },
    ],
    useCases: ["数据发现与自助", "治理与合规", "知识共享与入门", "风险与影响评估"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Data Governance · Alation",
    title: "Alation: data catalog and governance",
    subtitle: "Search, lineage, policies, and collaboration for trusted data",
    description:
      "Alation delivers an enterprise data catalog with powerful search, lineage, policies, and collaboration to improve discovery, compliance, and data culture.",
    highlights: [
      { title: "Powerful search", description: "Natural language search and recommendations." },
      { title: "Lineage & policies", description: "Visual lineage with policy application and impact." },
      { title: "Collaboration", description: "Ownership, annotations, and documentation." },
      { title: "Compliance-ready", description: "Policies and access controls for enterprise standards." },
    ],
    useCases: ["Data discovery/self-service", "Governance and compliance", "Knowledge sharing/onboarding", "Risk and impact evaluation"],
    ctaVisit: "Visit Alation",
    ctaBack: "Back to home",
  },
};

export function AlationPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
