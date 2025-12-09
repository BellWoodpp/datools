import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.convert.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "实验 / 归因 · Convert",
    title: "Convert：注重隐私的 A/B 测试平台",
    subtitle: "可视化编辑、服务器端实验与 GDPR 友好",
    description:
      "Convert 提供 A/B 与多变量测试、个性化与可视化编辑，强调隐私与合规，支持服务器端实验与企业级权限，适合关注数据保护的团队。",
    highlights: [
      { title: "隐私与合规", description: "GDPR 友好，重视数据保护与权限控制。" },
      { title: "可视化与服务器端", description: "前端可视化编辑与后端实验并存。" },
      { title: "多变量与个性化", description: "支持复杂实验与受众定向。" },
      { title: "支持与迁移", description: "提供迁移工具与企业支持。" },
    ],
    useCases: ["隐私敏感的 A/B 测试", "服务器端/客户端实验", "个性化投放", "合规与权限要求高的团队"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Experimentation · Convert",
    title: "Convert: privacy-focused A/B testing",
    subtitle: "Visual editor, server-side experiments, and GDPR-friendly",
    description:
      "Convert offers A/B and multivariate testing with personalization and a visual editor, emphasizes privacy/GDPR, and supports server-side experiments with enterprise controls.",
    highlights: [
      { title: "Privacy/GDPR", description: "Built with data protection and permissions in mind." },
      { title: "Visual + server-side", description: "Supports frontend visual edits and backend tests." },
      { title: "Multivariate & targeting", description: "Advanced experiments and audience targeting." },
      { title: "Migration/support", description: "Tools and enterprise support for onboarding." },
    ],
    useCases: ["Privacy-sensitive A/B tests", "Server-side/client-side experiments", "Personalization", "High-compliance teams"],
    ctaVisit: "Visit Convert",
    ctaBack: "Back to home",
  },
};

export function ConvertPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
