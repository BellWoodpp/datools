import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://motherduck.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "云仓 / DuckDB · MotherDuck",
    title: "MotherDuck：DuckDB 的云协作与扩展",
    subtitle: "云端持久化、共享与混合查询，补足 DuckDB 的协作能力",
    description:
      "MotherDuck 基于 DuckDB 提供云存储、协作与计算扩展，可在本地/浏览器与云端混合查询、共享数据集与结果，适合团队协作与持久化需求。",
    highlights: [
      { title: "云端持久化", description: "DuckDB 表与结果可持久化到云端，便于共享。" },
      { title: "混合执行", description: "本地/浏览器与云计算结合，灵活选择执行位置。" },
      { title: "协作与权限", description: "数据集共享、访问控制与团队协作。" },
      { title: "兼容 DuckDB", description: "与 DuckDB 生态兼容，轻量迁移。" },
    ],
    useCases: ["DuckDB 数据共享", "轻量团队协作分析", "浏览器 + 云混合查询", "持久化本地分析结果"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Cloud / DuckDB · MotherDuck",
    title: "MotherDuck: cloud collaboration for DuckDB",
    subtitle: "Cloud persistence, sharing, and hybrid queries on top of DuckDB",
    description:
      "MotherDuck adds cloud persistence, sharing, and compute to DuckDB, enabling hybrid local/browser plus cloud queries and team collaboration on shared datasets and results.",
    highlights: [
      { title: "Cloud persistence", description: "Persist DuckDB tables/results in the cloud for sharing." },
      { title: "Hybrid execution", description: "Mix local/browser with cloud compute as needed." },
      { title: "Collaboration & access", description: "Dataset sharing with access controls for teams." },
      { title: "DuckDB compatible", description: "Stays compatible with the DuckDB ecosystem for easy adoption." },
    ],
    useCases: ["Sharing DuckDB data", "Lightweight team analytics", "Browser + cloud hybrid queries", "Persisting local analysis outputs"],
    ctaVisit: "Visit MotherDuck",
    ctaBack: "Back to home",
  },
};

export function MotherDuckPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
