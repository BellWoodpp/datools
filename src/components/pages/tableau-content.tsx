import Link from "next/link";
import { defaultLocale } from "@/i18n";

const OFFICIAL_URL = "https://www.tableau.com/";

type TableauCopy = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: { title: string; description: string }[];
  modules: { title: string; description: string }[];
  useCases: string[];
  ctaVisit: string;
  ctaBack: string;
};

const copyByLocale: Record<string, TableauCopy> = {
  zh: {
    badge: "BI / 可视化 · Tableau",
    title: "Tableau：拖拽式交互 BI",
    subtitle: "覆盖 Prep 清洗、Desktop/Cloud 可视化与 Server/Cloud 协作共享",
    description:
      "Tableau 是一款数据可视化与商业智能（BI）工具，主打拖拽式操作和交互式图表仪表板。它可以从数据库、电子表格、云服务等多种数据源连接取数，提供数据清洗（Prep）、可视化分析（Desktop/Cloud）、协作与共享（Server/Cloud）等产品线。适用于自助式分析、数据探索、业务监控仪表板和数据故事展示，特点是上手快、交互丰富、图表与地图支持广泛。",
    highlights: [
      { title: "拖拽式建图表", description: "字段拖入即可生成图表，配合参数/计算字段/LOD 细粒度计算。" },
      { title: "多数据源连接", description: "支持数据库、电子表格、云仓库与在线应用，融合与提取模式灵活切换。" },
      { title: "交互式仪表板", description: "筛选联动、下钻、悬停提示与高亮操作，快速构建可探索的 Dashboard。" },
      { title: "丰富地图能力", description: "内置地理维度与地图层，支持密度图、渐变填色、双轴地图等多种表达。" },
      { title: "协作与治理", description: "发布到 Server/Cloud，支持订阅、权限、数据刷新计划与行级安全。" },
    ],
    modules: [
      { title: "Prep 数据清洗", description: "可视化 ETL，清洗/拼接/抽样/去重，输出给 Tableau 或数据库。" },
      { title: "Desktop / Cloud 分析", description: "拖拽式分析、参数、LOD、仪表板与故事线，支持增量与提取引擎。" },
      { title: "Server / Cloud 协作", description: "权限、订阅、计划刷新、评论嵌入、Ask Data/Explain Data 交互分析。" },
    ],
    useCases: ["自助式分析与数据探索", "业务监控仪表板", "地理可视化与地图分析", "数据故事汇报与分享"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "BI / Visualization · Tableau",
    title: "Tableau: interactive drag-and-drop BI",
    subtitle: "Prep for data cleaning, Desktop/Cloud for analysis, Server/Cloud for sharing",
    description:
      "Tableau is a BI and data visualization platform known for drag-and-drop workflows and interactive dashboards. It connects to databases, spreadsheets, and cloud services, spanning Prep for data cleaning, Desktop/Cloud for analysis, and Server/Cloud for collaboration. Ideal for self-service analytics, data exploration, operational dashboards, and data storytelling with rich charting and mapping support.",
    highlights: [
      { title: "Drag-and-drop charts", description: "Build visuals quickly with fields, parameters, calculations, and LOD expressions." },
      { title: "Broad data sources", description: "Connect databases, spreadsheets, cloud warehouses, and SaaS apps; blend or extract flexibly." },
      { title: "Interactive dashboards", description: "Filters, drill-downs, highlights, and tooltips for exploratory dashboards." },
      { title: "Strong mapping", description: "Built-in geospatial support with density maps, choropleths, and dual-axis maps." },
      { title: "Collaboration & governance", description: "Publish to Server/Cloud with subscriptions, refresh schedules, permissions, and row-level security." },
    ],
    modules: [
      { title: "Prep (data cleaning)", description: "Visual ETL for cleaning, joining, sampling, and deduping before analysis." },
      { title: "Desktop / Cloud analytics", description: "Drag-and-drop analysis, parameters, LOD, dashboards, stories, and extract engine." },
      { title: "Server / Cloud collaboration", description: "Permissions, subscriptions, refresh schedules, comments, and Ask Data/Explain Data." },
    ],
    useCases: ["Self-service analytics and exploration", "Operational dashboards", "Geospatial visualization", "Data storytelling and sharing"],
    ctaVisit: "Visit Tableau.com",
    ctaBack: "Back to home",
  },
};

const getCopy = (locale?: string) => copyByLocale[locale ?? defaultLocale] ?? copyByLocale.en;

export function TableauPageContent({ locale }: { locale?: string }) {
  const copy = getCopy(locale);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f1f] via-[#0c1e3c] to-[#0a0f1f] text-slate-100">
      <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
        <header className="space-y-3">
          <div className="inline-flex items-center rounded-full border border-[#1e5bff]/50 bg-[#0f1f3f]/70 px-3 py-1 text-xs font-semibold text-[#12c2e9]">
            {copy.badge}
          </div>
          <h1 className="text-3xl font-bold leading-tight">{copy.title}</h1>
          <p className="text-lg text-slate-200">{copy.subtitle}</p>
          <p className="text-sm text-slate-300/90">{copy.description}</p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {copy.highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#1e5bff]/30 bg-[#0f172a]/80 p-4 shadow-[0_15px_40px_-20px_rgba(18,194,233,0.5)]"
            >
              <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </section>

        <section className="space-y-4 rounded-xl border border-[#1e5bff]/30 bg-[#0b162e]/80 p-6 shadow-[0_20px_50px_-24px_rgba(18,194,233,0.55)]">
          <h2 className="text-xl font-semibold text-slate-50">产品线与模块</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.modules.map((module) => (
              <div key={module.title} className="rounded-lg border border-[#1e5bff]/20 bg-[#0f1f3f]/70 p-4">
                <h3 className="text-base font-semibold text-slate-100">{module.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{module.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3 rounded-xl border border-[#1e5bff]/30 bg-[#0f172a]/80 p-6 shadow-[0_15px_45px_-22px_rgba(30,91,255,0.55)]">
          <h2 className="text-xl font-semibold text-slate-50">适用场景</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {copy.useCases.map((useCase) => (
              <li key={useCase} className="rounded-lg border border-[#1e5bff]/20 bg-[#0b162e]/80 p-3 text-sm text-slate-200">
                {useCase}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-wrap gap-3">
          <Link
            href={OFFICIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#12c2e9] to-[#1e5bff] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(30,91,255,0.8)] hover:from-[#1e5bff] hover:to-[#12c2e9]"
          >
            {copy.ctaVisit}
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-lg border border-[#1e5bff]/40 bg-[#0f1f3f] px-4 py-2 text-sm font-semibold text-slate-100 hover:border-[#12c2e9] hover:text-[#12c2e9]"
          >
            {copy.ctaBack}
          </Link>
        </section>
      </div>
    </main>
  );
}
