 "use client";

import Link from "next/link";
import { defaultLocale, locales, type Locale } from "@/i18n";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const OFFICIAL_URL = "https://www.metabase.com/";
const USE_CASE_TITLES: Record<string, string> = {
  zh: "适用场景",
  ja: "ユースケース",
  fr: "Cas d’usage",
  es: "Casos de uso",
  pt: "Casos de uso",
  de: "Anwendungsfälle",
  ru: "Сценарии использования",
  ar: "حالات الاستخدام",
  id: "Kasus penggunaan",
  en: "Use cases",
};

type Copy = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: { title: string; description: string }[];
  useCases: string[];
  ctaVisit: string;
  ctaBack: string;
};

const copyByLocale: Record<string, Copy> = {
  zh: {
    badge: "BI / 可视化 · Metabase",
    title: "Metabase：开源自助式 BI",
    subtitle: "SQL/可视化问答、仪表板与嵌入，易于自托管",
    description:
      "Metabase 是开源的 BI 与可视化工具，提供图形化问答和 SQL 查询，支持仪表板、定时发送、警报与嵌入。易于连接主流数据库，自托管简单，适合团队快速搭建自助分析。",
    highlights: [
      { title: "零门槛问答", description: "基于界面点选或自然语言（部分版本），无需写 SQL 即可生成图表。" },
      { title: "SQL/模型复用", description: "支持 SQL 编辑器、保存问题与模型复用，便于共享指标。" },
      { title: "仪表板与告警", description: "仪表板组合、定时邮件/Slack 发送、阈值告警提醒。" },
      { title: "易于部署", description: "开源版可自托管，云端托管亦可用，连接多种关系型与数据仓库。" },
    ],
    useCases: ["团队自助分析", "运营/产品仪表板", "简易嵌入式报表", "中小团队快速 BI 起步"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "BI / Visualization · Metabase",
    title: "Metabase: open-source self-service BI",
    subtitle: "Point-and-click or SQL questions, dashboards, alerts, easy self-hosting",
    description:
      "Metabase is an open-source BI and visualization tool with GUI questions and SQL, dashboards, scheduling, alerts, and embedding. It connects to major databases, is simple to self-host, and fits teams needing quick self-service analytics.",
    highlights: [
      { title: "No-code questions", description: "Point-and-click (and some NL) queries to build charts without writing SQL." },
      { title: "SQL & models", description: "Full SQL editor with saved questions/models for reuse and sharing." },
      { title: "Dashboards & alerts", description: "Compose dashboards, schedule emails/Slack, and set threshold alerts." },
      { title: "Easy deployment", description: "Open-source self-hosting or hosted cloud; works with popular databases/warehouses." },
    ],
    useCases: ["Team self-service analytics", "Ops/product dashboards", "Lightweight embedded reports", "BI quick start for small teams"],
    ctaVisit: "Visit Metabase",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "BI / 可視化 · Metabase",
    title: "Metabase：オープンソースのセルフサービス BI",
    subtitle: "ポイント＆クリック/SQL 質問、ダッシュボードとアラート、自社ホストも容易",
    description:
      "Metabase はオープンソースの BI/可視化ツールで、GUI 質問と SQL、ダッシュボード、スケジュール配信、アラート、埋め込みを提供します。主要 DB に接続でき、自社ホストが簡単で、チームのセルフサービス分析に適します。",
    highlights: [
      { title: "ノーコード質問", description: "GUI（および一部 NL）で SQL なしにグラフ作成。" },
      { title: "SQL & モデル", description: "SQL エディタと保存質問/モデルの再利用で指標を共有。" },
      { title: "ダッシュボードとアラート", description: "ダッシュボード構築、メール/Slack 送信、しきい値アラート。" },
      { title: "簡単デプロイ", description: "自社ホストが容易で、リレーショナル/倉庫系 DB に広く対応。" },
    ],
    useCases: ["チームのセルフサービス分析", "運用/プロダクトダッシュボード", "軽量な埋め込みレポート", "小規模チームの BI 立ち上げ"],
    ctaVisit: "公式サイトを見る",
    ctaBack: "ホームへ戻る",
  },
};

const getCopy = (locale?: string) => copyByLocale[locale ?? defaultLocale] ?? copyByLocale.en;

const CATEGORY_LABELS: Record<string, Partial<Record<Locale, string>>> = {
  "visualization": {
    en: "BI / Visualization",
    zh: "BI / 可视化",
    ja: "BI / 可視化",
  },
  "open-source": {
    en: "Open Source / Self-hosted",
    zh: "开源 / 自建组件",
    ja: "オープンソース / 自社ホスト",
  },
};

function inferCategorySlug(pathname: string): string | undefined {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  const start = locales.includes(first as Locale) ? 1 : 0;
  const idx = segments.indexOf("data-analysis-tools", start);
  if (idx !== -1 && segments[idx + 1]) {
    return segments[idx + 1].toLowerCase();
  }
}

export function MetabasePageContent({ locale }: { locale?: string }) {
  const copy = getCopy(locale);
  const pathname = usePathname();
  const slug = inferCategorySlug(pathname);
  const homeLabel = copy.ctaBack || "Home";
  const basePath = locale && locale !== defaultLocale ? `/${locale}` : "/";
  const useCaseTitle = USE_CASE_TITLES[locale ?? defaultLocale] ?? USE_CASE_TITLES.en;
  const mappedCategory =
    (slug && CATEGORY_LABELS[slug]?.[(locale as Locale) ?? defaultLocale]) ||
    (slug && CATEGORY_LABELS[slug]?.[defaultLocale]) ||
    "";
  const categoryLabel =
    mappedCategory || copy.badge?.split("·")?.[0]?.trim() || slug || "BI / Visualization";
  const displayBadge =
    slug === "open-source"
      ? `${categoryLabel} · ${copy.title.split("：")[0].split(":")[0].trim() || "Metabase"}`
      : copy.badge;
  const categoryParams = categoryLabel ? new URLSearchParams({ category: categoryLabel }).toString() : "";
  const categoryHref =
    categoryLabel && categoryParams
      ? `${basePath}${basePath.endsWith("/") ? "" : "/"}?${categoryParams}`
      : basePath;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f1f] via-[#0c1e3c] to-[#0a0f1f] text-slate-100">
      <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
        <Breadcrumb className="text-sm text-slate-300/90">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={basePath}>{homeLabel}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={categoryHref}>{categoryLabel}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{copy.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <header className="space-y-3">
          <div className="inline-flex items-center rounded-full border border-[#1e5bff]/50 bg-[#0f1f3f]/70 px-3 py-1 text-xs font-semibold text-[#12c2e9]">
            {displayBadge}
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

        <section className="space-y-3 rounded-xl border border-[#1e5bff]/30 bg-[#0f172a]/80 p-6 shadow-[0_15px_45px_-22px_rgba(30,91,255,0.55)]">
          <h2 className="text-xl font-semibold text-slate-50">{useCaseTitle}</h2>
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
