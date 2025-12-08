import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.workato.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "iPaaS / 自动化 · Workato",
    title: "Workato：企业级集成与自动化",
    subtitle: "触发器、工作流、数据同步与治理，支持跨部门协作",
    description:
      "Workato 是企业级 iPaaS，提供可视化工作流、触发器、数据同步、审批与治理能力，适合在 IT 守护下让业务/运营/数据团队协作构建集成与自动化。",
    highlights: [
      { title: "企业级治理", description: "权限、审核、日志与环境隔离，满足合规要求。" },
      { title: "丰富连接器", description: "覆盖主流企业 SaaS 与数据库，减少定制开发。" },
      { title: "自动化与审批", description: "多步工作流、条件路由、人工审批节点结合。" },
      { title: "数据同步", description: "跨系统数据双向同步与主数据场景支持。" },
    ],
    useCases: ["跨部门流程自动化", "企业 SaaS 集成", "审批与主数据同步", "在 IT 治理下的业务自助"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "iPaaS / Automation · Workato",
    title: "Workato: enterprise integration & automation",
    subtitle: "Triggers, workflows, data sync, and governance for cross-team collaboration",
    description:
      "Workato is an enterprise iPaaS with visual workflows, triggers, data sync, approvals, and governance so IT can empower business/ops/data teams to build integrations safely.",
    highlights: [
      { title: "Enterprise governance", description: "Permissions, reviews, logging, and environments for compliance." },
      { title: "Rich connectors", description: "Major enterprise SaaS/DB connectors to cut custom work." },
      { title: "Automation + approvals", description: "Multi-step flows with conditions and human approvals." },
      { title: "Data sync", description: "Bi-directional sync and MDM-style use cases." },
    ],
    useCases: ["Cross-team automation", "Enterprise SaaS integration", "Approvals and master data sync", "Business self-service under IT guardrails"],
    ctaVisit: "Visit Workato",
    ctaBack: "Back to home",
  },
};

export function WorkatoPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
