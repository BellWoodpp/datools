import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://deepnote.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "协作分析 · Deepnote",
    title: "Deepnote：协作型云 Notebook",
    subtitle: "SQL + Python，实时协作与评论，连接多种数据源",
    description:
      "Deepnote 是云端协作 Notebook，支持 SQL 与 Python，提供实时协作、评论、分享与环境管理，便于团队共建分析与仪表板。",
    highlights: [
      { title: "实时协作", description: "多人同时编辑与评论，像文档一样协作 Notebook。" },
      { title: "SQL 与 Python", description: "SQL 结果可直接在 Python 中继续分析与可视化。" },
      { title: "数据连接", description: "对接仓库/数据库/文件，简化凭证与环境配置。" },
      { title: "分享与发布", description: "一键分享链接或发布结果，便于对外展示。" },
    ],
    useCases: ["团队数据分析", "仪表板与报告分享", "教学与培训", "快速原型与探索"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Collaborative Analytics · Deepnote",
    title: "Deepnote: collaborative cloud notebooks",
    subtitle: "SQL + Python with real-time coauthoring, comments, and data connections",
    description:
      "Deepnote is a cloud notebook built for collaboration, supporting SQL and Python with real-time editing, comments, sharing, and environment management for teams.",
    highlights: [
      { title: "Real-time collaboration", description: "Multi-user editing and comments like a document." },
      { title: "SQL + Python", description: "Carry SQL results into Python for further analysis/visuals." },
      { title: "Data connections", description: "Connect warehouses/DBs/files with easy creds and env setup." },
      { title: "Sharing/publishing", description: "Share links or publish outputs for viewers." },
    ],
    useCases: ["Team data analysis", "Dashboards/reports", "Teaching/training", "Rapid prototyping and exploration"],
    ctaVisit: "Visit Deepnote",
    ctaBack: "Back to home",
  },
};

export function DeepnotePageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
