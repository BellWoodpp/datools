import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://zapier.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "自动化 · Zapier",
    title: "Zapier：无代码多步自动化",
    subtitle: "连接数千 SaaS，基于触发器执行多步工作流",
    description:
      "Zapier 面向业务用户提供无代码自动化，连接数千 SaaS 应用，基于触发器执行多步动作，支持条件、延时与分支，常用于营销、运营与生产力自动化。",
    highlights: [
      { title: "海量连接器", description: "覆盖主流 SaaS 与工具，快速组合流程。" },
      { title: "无代码工作流", description: "触发器 + 多步动作，支持过滤、延时与分支。" },
      { title: "易上手", description: "模板丰富，适合非技术用户配置。" },
      { title: "自动化场景", description: "表单/CRM/邮件/协作工具的联动与同步。" },
    ],
    useCases: ["营销与运营自动化", "CRM/表单/邮件联动", "团队协作通知", "个人效率提升"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Automation · Zapier",
    title: "Zapier: no-code multi-step automation",
    subtitle: "Connect thousands of SaaS apps with trigger-based workflows",
    description:
      "Zapier lets business users build no-code automations across thousands of SaaS apps with triggers and multi-step actions, including filters, delays, and branches—great for marketing, ops, and productivity flows.",
    highlights: [
      { title: "Huge connector library", description: "Thousands of SaaS integrations to mix and match." },
      { title: "No-code workflows", description: "Triggers plus multi-step actions with filters/delays/branches." },
      { title: "Easy onboarding", description: "Templates and UI built for non-technical users." },
      { title: "Automation use cases", description: "CRM/forms/email/collab tool sync and notifications." },
    ],
    useCases: ["Marketing/ops automation", "CRM/form/email syncing", "Team notifications", "Personal productivity"],
    ctaVisit: "Visit Zapier",
    ctaBack: "Back to home",
  },
};

export function ZapierPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
