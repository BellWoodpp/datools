"use client";

import Link from "next/link";
import { defaultLocale, locales, type Locale } from "@/i18n";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export type BiPageCopy = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: { title: string; description: string }[];
  useCases: string[];
  useCasesHeading?: string;
  ctaVisit: string;
  ctaBack: string;
};

export type BiPageCopyMap = Record<string, BiPageCopy>;

const pickCopy = (copyByLocale: BiPageCopyMap, locale?: string) =>
  copyByLocale[locale ?? defaultLocale] ?? copyByLocale.en ?? Object.values(copyByLocale)[0];

const CATEGORY_LABELS: Record<string, Partial<Record<Locale, string>>> = {
  "visualization": {
    en: "BI / Visualization",
    zh: "BI / 可视化",
    ja: "BI / 可視化",
  },
  "product-analytics": {
    en: "Product Analytics",
    zh: "埋点 / 产品分析",
    ja: "プロダクトアナリティクス",
  },
  "elt-integration": {
    en: "ETL / ELT & Integration",
    zh: "ETL / ELT 与集成",
    ja: "ETL / ELT・連携",
  },
  "warehouse": {
    en: "Warehouse / Lake",
    zh: "数据仓库 / 数据湖",
    ja: "データウェアハウス / レイク",
  },
  "collaborative-analytics": {
    en: "Notebook / Collaborative Analytics",
    zh: "笔记本 / 协作分析",
    ja: "ノートブック / コラボ分析",
  },
  "attribution": {
    en: "Experimentation / Attribution",
    zh: "实验 / 归因",
    ja: "実験 / アトリビューション",
  },
  "governance": {
    en: "Data Quality / Governance",
    zh: "数据质量 / 治理",
    ja: "データ品質 / ガバナンス",
  },
  "ai-assistants": {
    en: "ML / AutoML / AI Assistants",
    zh: "ML / AutoML / AI 助手",
    ja: "ML / AutoML / AI アシスタント",
  },
  "open-source": {
    en: "Open Source / Self-hosted",
    zh: "开源 / 自建组件",
    ja: "オープンソース / 自社ホスト",
  },
};

const USE_CASES_HEADING: Partial<Record<Locale, string>> = {
  en: "Use cases",
  zh: "适用场景",
  ja: "適用シーン",
  es: "Casos de uso",
  fr: "Cas d’usage",
  pt: "Casos de uso",
  de: "Anwendungsfälle",
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

export function BiPageTemplate({
  copyByLocale,
  locale,
  officialUrl,
}: {
  copyByLocale: BiPageCopyMap;
  locale?: string;
  officialUrl: string;
}) {
  const copy = pickCopy(copyByLocale, locale);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const slug = inferCategorySlug(pathname);
  const homeLabel = copy.ctaBack || "Home";
  const basePath = locale && locale !== defaultLocale ? `/${locale}` : "/";
  const categoryFromUrl = searchParams.get("category") || "";
  const mappedCategory =
    (slug && CATEGORY_LABELS[slug]?.[(locale as Locale) ?? defaultLocale]) ||
    (slug && CATEGORY_LABELS[slug]?.[defaultLocale]) ||
    "";
  const categoryLabel =
    categoryFromUrl.trim() ||
    mappedCategory ||
    copy.badge?.split("·")?.[0]?.trim() ||
    slug ||
    "";
  const categoryParams = categoryLabel ? new URLSearchParams({ category: categoryLabel }).toString() : "";
  const categoryHref =
    categoryLabel && categoryParams
      ? `${basePath}${basePath.endsWith("/") ? "" : "/"}?${categoryParams}`
      : basePath;
  const useCasesHeading =
    copy.useCasesHeading ??
    (locale && USE_CASES_HEADING[locale as Locale]) ??
    USE_CASES_HEADING[defaultLocale] ??
    "Use cases";

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f1f] via-[#0c1e3c] to-[#0a0f1f] text-slate-100">
      <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
        <Breadcrumb className="text-sm text-slate-300/90">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={basePath}>{homeLabel}</BreadcrumbLink>
            </BreadcrumbItem>
            {categoryLabel ? (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={categoryHref}>{categoryLabel}</BreadcrumbLink>
                </BreadcrumbItem>
              </>
            ) : null}
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
          <h2 className="text-xl font-semibold text-slate-50">{useCasesHeading}</h2>
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
            href={officialUrl}
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
