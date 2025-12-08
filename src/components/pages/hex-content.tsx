import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://hex.tech/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "协作分析 · Hex",
    title: "Hex：SQL + Python 的协作 Notebook",
    subtitle: "融合 SQL、Python 与可视化，支持分享和发布数据应用",
    description:
      "Hex 是面向数据团队的协作式 Notebook，允许在同一文档中使用 SQL 与 Python，快速生成可视化并分享/发布交互式数据应用，支持版本与权限协作。",
    highlights: [
      { title: "SQL + Python", description: "同一工作流混合查询与编程，灵活分析。" },
      { title: "可视化与应用", description: "内置图表组件，支持发布交互式应用。" },
      { title: "协作与权限", description: "实时协作、评论与权限控制。" },
      { title: "数据连接", description: "连接仓库/数据库，简化取数与缓存。" },
    ],
    useCases: ["探索分析与原型", "数据叙事与分享", "团队协作 Notebook", "快速发布内部数据应用"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Collaborative Analytics · Hex",
    title: "Hex: collaborative SQL + Python notebooks",
    subtitle: "Blend SQL, Python, and visuals; share and publish interactive data apps",
    description:
      "Hex lets data teams mix SQL and Python in one notebook, build visuals quickly, and share or publish interactive data apps with collaboration controls.",
    highlights: [
      { title: "SQL + Python", description: "Combine queries and code in one workflow." },
      { title: "Visuals & apps", description: "Built-in charts and app publishing for interactivity." },
      { title: "Collaboration", description: "Real-time coauthoring, comments, and permissions." },
      { title: "Data connections", description: "Connect to warehouses/DBs with caching and creds handling." },
    ],
    useCases: ["Exploratory analysis", "Data storytelling/sharing", "Team notebooks", "Internal data apps"],
    ctaVisit: "Visit Hex",
    ctaBack: "Back to home",
  },
};

export function HexPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
