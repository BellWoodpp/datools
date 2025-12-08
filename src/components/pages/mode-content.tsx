import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://mode.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "BI / 可视化 · Mode",
    title: "Mode：分析师友好的 BI（SQL + Python/R）",
    subtitle: "SQL + Notebook + 可视化一体化，适合分析师协作与分享",
    description:
      "Mode 将 SQL 查询、可视化与 Notebook（Python/R）结合，方便分析师写 SQL、做统计/可视化，并快速分享报告或仪表板。支持仓库直连、权限控制、调度刷新与嵌入。",
    highlights: [
      { title: "SQL + Notebook", description: "SQL 结果可直接在 Python/R Notebook 中继续分析和可视化。" },
      { title: "仓库直连", description: "支持常见数据仓库/数据库，避免数据搬运。" },
      { title: "分享与协作", description: "报告/仪表板共享，支持权限和嵌入，便于团队协作。" },
      { title: "调度与版本", description: "定时运行、参数化查询、版本与审计追踪。" },
    ],
    useCases: ["分析师数据探索", "统计分析与实验报告", "运营/产品仪表板", "嵌入式数据故事"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "BI / Visualization · Mode",
    title: "Mode: analyst-first BI (SQL + Python/R)",
    subtitle: "SQL, notebooks, and visualizations together for collaborative analytics",
    description:
      "Mode blends SQL, visualization, and Python/R notebooks so analysts can query, run stats, build charts, and share reports or dashboards. It connects directly to warehouses, supports permissions, scheduling, and embedding.",
    highlights: [
      { title: "SQL + notebooks", description: "Carry SQL results into Python/R for further analysis and visualization." },
      { title: "Direct warehouse connect", description: "Works with major warehouses/databases without data copying." },
      { title: "Sharing & collaboration", description: "Reports/dashboards with permissions and embeds for teams." },
      { title: "Scheduling & versioning", description: "Scheduled runs, parameters, and auditing/version history." },
    ],
    useCases: ["Analyst exploration", "Stat/experiment reports", "Ops/product dashboards", "Embedded data stories"],
    ctaVisit: "Visit Mode",
    ctaBack: "Back to home",
  },
};

export function ModePageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
