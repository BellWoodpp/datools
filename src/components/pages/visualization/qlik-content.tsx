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

const OFFICIAL_URL = "https://www.qlik.com/";
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
    badge: "BI / 可视化 · Qlik",
    title: "Qlik Sense：关联内存引擎的自助式分析",
    subtitle: "关联模型 + 内存计算，支持数据集成、实时探索与可视化",
    description:
      "Qlik 提供基于关联内存引擎的 BI 平台，支持自助式探索、可视化仪表板和数据集成（Qlik Cloud Data Integration）。关联模型能快速联想字段关系，适合实时分析、运营监控和业务自助探索。",
    highlights: [
      { title: "关联引擎", description: "独特的关联模型与内存计算，支持快速过滤和多维联想。" },
      { title: "自助可视化", description: "拖拽式图表、下钻、快速筛选与响应式仪表板。" },
      { title: "数据集成", description: "Qlik 数据集成/复制工具支持多源同步与变更捕获 (CDC)。" },
      { title: "部署灵活", description: "云端与私有部署均可，支持数据网关与安全控制。" },
    ],
    useCases: ["实时运营监控", "自助式数据探索", "销售/供应链分析", "多数据源融合分析"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "BI / Visualization · Qlik",
    title: "Qlik Sense: associative in-memory analytics",
    subtitle: "Associative model with in-memory engine, data integration, and interactive dashboards",
    description:
      "Qlik Sense delivers self-service analytics powered by an associative in-memory engine, with interactive dashboards and Qlik Cloud Data Integration. The associative model surfaces relationships across fields for fast exploration and operational insights.",
    highlights: [
      { title: "Associative engine", description: "Unique associative model with in-memory computing for fast filtering and discovery." },
      { title: "Self-service visuals", description: "Drag-and-drop charts, drill-downs, responsive dashboards, and quick selections." },
      { title: "Data integration", description: "Qlik data integration/replication with multi-source sync and CDC." },
      { title: "Flexible deployment", description: "Cloud or self-hosted with gateways and enterprise-grade security." },
    ],
    useCases: ["Real-time operations monitoring", "Self-service exploration", "Sales/supply chain analytics", "Blending multiple data sources"],
    ctaVisit: "Visit Qlik",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "BI / 可視化 · Qlik",
    title: "Qlik Sense：連想インメモリ分析",
    subtitle: "連想エンジンでセルフサービス可視化、データ統合も提供",
    description:
      "Qlik Sense は連想型インメモリエンジンでセルフサービス分析と可視化を実現し、Qlik Cloud Data Integration によるデータ統合も提供します。自助探索やインメモリ計算を得意とします。",
    highlights: [
      { title: "連想インメモリ", description: "データ間の関係を連想的に探索し、高速なインメモリ計算を実現。" },
      { title: "セルフサービス可視化", description: "ドラッグ＆ドロップでビジュアル作成、フィルタやドリルで探索。" },
      { title: "データ統合", description: "Qlik Cloud Data Integration で多源データの取り込みと統合を支援。" },
      { title: "展開柔軟性", description: "クラウドや自社ホストで利用でき、権限とガバナンスを提供。" },
    ],
    useCases: ["セルフサービス探索", "インメモリ高速可視化", "統合データのダッシュボード", "複数チームでの共有とガバナンス"],
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

export function QlikPageContent({ locale }: { locale?: string }) {
  const copy = getCopy(locale);
  const pathname = usePathname();
  const slug = inferCategorySlug(pathname);
  const homeLabel = copy.ctaBack || "Home";
  const basePath = locale && locale !== defaultLocale ? `/${locale}` : "/";
  const useCaseTitle = USE_CASE_TITLES[locale ?? defaultLocale] ?? USE_CASE_TITLES.en;
  const categoryLabel =
    (slug && CATEGORY_LABELS[slug]?.[(locale as Locale) ?? defaultLocale]) ||
    (slug && CATEGORY_LABELS[slug]?.[defaultLocale]) ||
    copy.badge?.split("·")?.[0]?.trim() ||
    slug ||
    "BI / Visualization";
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
