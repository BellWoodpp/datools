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

const OFFICIAL_URL = "https://www.microsoft.com/en-us/power-platform/products/power-bi";
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
const MODULE_TITLES: Record<string, string> = {
  zh: "产品线与模块",
  ja: "製品ラインとモジュール",
  fr: "Produits et modules",
  es: "Líneas de producto y módulos",
  pt: "Linhas de produto e módulos",
  de: "Produktlinien & Module",
  ru: "Линейки продуктов и модули",
  ar: "المنتجات والوحدات",
  id: "Produk & modul",
  en: "Products & modules",
};

type Copy = {
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

const copyByLocale: Record<string, Copy> = {
  zh: {
    badge: "BI / 可视化 · Power BI",
    title: "Power BI：微软自助式 BI 与可视化",
    subtitle: "Power Query 清洗、DAX 建模、交互式仪表板，深度集成 Microsoft 生态",
    description:
      "Power BI 是微软的商业智能与数据可视化产品线，主打自助式分析、拖拽式仪表板和企业级发布。支持 Power Query 低代码数据清洗、DAX 建模与度量、Tabular 语义层、丰富的可视化组件，并可通过数据网关连接本地与云端多种数据源。与 Microsoft 365、Azure、Teams、SharePoint、Excel 等生态深度集成，适用于业务分析、运营监控和高管看板。",
    highlights: [
      { title: "Power Query 清洗", description: "低代码 ETL，支持 M 语言转换，快速整合多源数据。" },
      { title: "DAX 模型与度量", description: "Tabular 语义层 + 度量/层级/行级安全 (RLS)，构建一致的业务口径。" },
      { title: "交互式报表与仪表板", description: "切片器、下钻、钻取、交叉筛选与工具提示，支持自助探索。" },
      { title: "连接器与网关", description: "数据库、湖仓、SaaS 应用广泛连接，企业网关支持本地数据刷新。" },
      { title: "生态与协作", description: "与 Excel/Teams/SharePoint/PowerPoint 深度集成，支持订阅、评论与嵌入。" },
    ],
    modules: [
      { title: "Power BI Desktop", description: "本地建模与报表开发，DAX/Power Query、可视化与本地预览。" },
      { title: "Power BI Service", description: "云端发布、数据集与语义模型管理、计划刷新、权限与 RLS/OLS。" },
      { title: "Embedded / Mobile", description: "应用内嵌入、移动端查看与告警，配合 Azure AD 做细粒度访问控制。" },
    ],
    useCases: ["运营/销售/财务仪表板", "自助式数据探索与洞察", "企业级统一口径报表与订阅", "与 Office/Teams 协作分享"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "BI / Visualization · Power BI",
    title: "Power BI: Microsoft self-service BI",
    subtitle: "Power Query prep, DAX modeling, interactive dashboards, deep Microsoft integration",
    description:
      "Power BI is Microsoft's BI and data visualization suite for self-service analytics and enterprise dashboards. It offers Power Query low-code data prep, DAX modeling with a Tabular semantic layer, rich visuals, and data gateways to connect on-prem and cloud sources. Deep integration with Microsoft 365, Azure, Teams, SharePoint, and Excel enables collaboration, subscriptions, and embedded scenarios across the ecosystem.",
    highlights: [
      { title: "Power Query prep", description: "Low-code ETL with M language transformations to clean and combine data quickly." },
      { title: "DAX & semantic model", description: "Tabular model with measures, hierarchies, and row-level security for consistent metrics." },
      { title: "Interactive reports & dashboards", description: "Slicers, drill-through, cross-filtering, and rich tooltips for exploration." },
      { title: "Connectors & gateways", description: "Broad connectors for databases/warehouses/SaaS; gateways keep on-prem data refreshed." },
      { title: "Microsoft ecosystem", description: "Tight integration with Excel, Teams, SharePoint, and PowerPoint with subscriptions and embeds." },
    ],
    modules: [
      { title: "Power BI Desktop", description: "Local modeling and report authoring with DAX, Power Query, visuals, and preview." },
      { title: "Power BI Service", description: "Cloud publishing, datasets/semantic models, scheduled refresh, permissions, RLS/OLS." },
      { title: "Embedded / Mobile", description: "App embedding and mobile consumption with alerts, secured by Azure AD." },
    ],
    useCases: ["Operational/sales/finance dashboards", "Self-service analytics and exploration", "Enterprise reports with subscriptions", "Collaboration with Office/Teams"],
    ctaVisit: "Visit Power BI",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "BI / 可視化 · Power BI",
    title: "Power BI：Microsoft のセルフサービス BI",
    subtitle: "Power Query で整形、DAX モデル、対話型ダッシュボード、Microsoft 連携",
    description:
      "Power BI は Microsoft の BI/可視化スイートで、セルフサービス分析とエンタープライズダッシュボードを提供します。Power Query によるローコード整形、DAX モデリングと Tabular セマンティック層、豊富なビジュアル、オンプレ・クラウド接続用データゲートウェイを備え、Microsoft 365/Azure/Teams/SharePoint/Excel と深く統合されています。",
    highlights: [
      { title: "Power Query 整形", description: "M 言語によるローコード ETL でデータを素早く整形・結合。" },
      { title: "DAX & セマンティックモデル", description: "指標・階層・行レベルセキュリティを持つ Tabular モデルで一貫した指標を提供。" },
      { title: "対話型レポート/ダッシュボード", description: "スライサー、ドリルスルー、クロスフィルタ、豊富なツールチップで探索。" },
      { title: "コネクタ & ゲートウェイ", description: "DB/倉庫/SaaS への広い接続性、ゲートウェイでオンプレデータも更新。" },
      { title: "Microsoft エコシステム", description: "Excel/Teams/SharePoint/PowerPoint 連携、サブスクや埋め込みも容易。" },
    ],
    modules: [
      { title: "Power BI Desktop", description: "ローカルでモデル/レポートを作成。DAX・Power Query・ビジュアル・プレビュー。" },
      { title: "Power BI Service", description: "クラウドで公開、データセット/セマンティックモデル管理、計画更新、権限、RLS/OLS。" },
      { title: "Embedded / Mobile", description: "アプリ埋め込み、モバイル閲覧とアラート、Azure AD によるセキュアアクセス。" },
    ],
    useCases: ["営業/財務/運用ダッシュボード", "セルフサービス分析と探索", "統一指標のエンタープライズレポートとサブスク", "Office/Teams 連携での共有"],
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

export function PowerBIPageContent({ locale }: { locale?: string }) {
  const copy = getCopy(locale);
  const pathname = usePathname();
  const slug = inferCategorySlug(pathname);
  const homeLabel = copy.ctaBack || "Home";
  const basePath = locale && locale !== defaultLocale ? `/${locale}` : "/";
  const useCaseTitle = USE_CASE_TITLES[locale ?? defaultLocale] ?? USE_CASE_TITLES.en;
  const moduleTitle = MODULE_TITLES[locale ?? defaultLocale] ?? MODULE_TITLES.en;
  const mappedCategory =
    (slug && CATEGORY_LABELS[slug]?.[(locale as Locale) ?? defaultLocale]) ||
    (slug && CATEGORY_LABELS[slug]?.[defaultLocale]) ||
    "";
  const categoryLabel =
    mappedCategory || copy.badge?.split("·")?.[0]?.trim() || slug || "BI / Visualization";
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

        <section className="space-y-4 rounded-xl border border-[#1e5bff]/30 bg-[#0b162e]/80 p-6 shadow-[0_20px_50px_-24px_rgba(18,194,233,0.55)]">
          <h2 className="text-xl font-semibold text-slate-50">{moduleTitle}</h2>
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
