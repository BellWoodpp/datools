import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://openai.com/chatgpt";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "GPT 助手 · SQL / 可视化",
    title: "GPT 类 SQL / 可视化助手：自然语言问数",
    subtitle: "NL to SQL/图表、聊天式解释，连接数据库或 BI",
    description:
      "GPT 风格的 SQL/可视化助手支持用自然语言生成查询与图表，连接数据库、仓库或 BI 语义层，提供上下文解释与调试，帮助业务和分析人员自助问数。",
    highlights: [
      { title: "NL2SQL 与图表", description: "自然语言生成 SQL 与可视化草图，支持参数化与业务术语映射。" },
      { title: "聊天式解释", description: "对查询与结果进行解释、调试与优化，提供逐步澄清与修正。" },
      { title: "连接与安全", description: "连接数据库/仓库/BI，配合行列权限、审计与只读令牌等安全控制。" },
      { title: "团队协作", description: "对话/结果可分享或嵌入，辅助文档化指标与常见问题。" },
    ],
    useCases: [
      "业务用户自助提问与数据探索",
      "分析师加速写 SQL 与检查结果",
      "在 BI 门户或数据服务中提供聊天式问答",
      "新成员快速理解指标与数据模型",
    ],
    ctaVisit: "体验 ChatGPT",
    ctaBack: "返回首页",
  },
  en: {
    badge: "GPT assistant · SQL / visualization",
    title: "GPT-style SQL/visual assistants: ask data in natural language",
    subtitle: "NL to SQL/charts, chat-based explanations, DB or BI connections",
    description:
      "GPT-style SQL and visualization assistants generate queries and charts from natural language, connect to databases/warehouses or BI semantic layers, and explain or debug results to help business users and analysts self-serve questions.",
    highlights: [
      { title: "NL2SQL & charts", description: "Turn natural language into SQL and chart drafts with parameterization and business-term mapping." },
      { title: "Chat-based explanations", description: "Explain, debug, and optimize queries/results through iterative conversation." },
      { title: "Connectivity & security", description: "Connect to databases/warehouses/BI with row/column policies, audit, and read-only tokens." },
      { title: "Team collaboration", description: "Share or embed conversations/results to document metrics and FAQs." },
    ],
    useCases: [
      "Business users self-serve questions and exploration",
      "Analysts speed up SQL authoring and validation",
      "Chat-style Q&A inside BI portals or data services",
      "Onboarding newcomers to metrics and data models",
    ],
    ctaVisit: "Try ChatGPT",
    ctaBack: "Back to home",
  },
};

export function GPTSqlAssistantsPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
