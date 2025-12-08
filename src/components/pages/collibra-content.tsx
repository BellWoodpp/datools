import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.collibra.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "数据治理 · Collibra",
    title: "Collibra：企业数据治理与目录",
    subtitle: "覆盖数据质量、血缘、隐私与合规工作流",
    description:
      "Collibra 是企业级数据治理与目录平台，提供资产目录、血缘、数据质量、隐私与合规工作流，帮助建立统一的数据管理与审批流程。",
    highlights: [
      { title: "数据目录与搜索", description: "集中管理元数据，提升发现与信任。" },
      { title: "血缘与影响分析", description: "追踪上下游依赖，辅助风险评估。" },
      { title: "质量与策略", description: "质量规则、策略与工作流审批。" },
      { title: "隐私与合规", description: "支持隐私标签、同意与审计要求。" },
    ],
    useCases: ["企业数据治理", "合规与审计", "风险与影响评估", "数据资产管理"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Data Governance · Collibra",
    title: "Collibra: enterprise data governance and catalog",
    subtitle: "Quality, lineage, privacy, and compliance workflows",
    description:
      "Collibra provides enterprise governance with catalog, lineage, data quality, privacy, and compliance workflows to standardize data management and approvals.",
    highlights: [
      { title: "Catalog & search", description: "Centralized metadata for discoverability and trust." },
      { title: "Lineage & impact", description: "Trace dependencies for risk and impact assessment." },
      { title: "Quality & policies", description: "Rules, policies, and workflow approvals." },
      { title: "Privacy & compliance", description: "Privacy labels, consent, and audit support." },
    ],
    useCases: ["Enterprise data governance", "Compliance and audit", "Risk and impact assessment", "Data asset management"],
    ctaVisit: "Visit Collibra",
    ctaBack: "Back to home",
  },
};

export function CollibraPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
