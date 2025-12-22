'use client';

import type { HomeFeedDictionary, HomeFeedTool, Locale } from "@/i18n/types";
import { ToolCard } from "@/components/ui/tool-card";
import Search from "@/components/ui/search";
import { CategoryFilter } from "@/components/home/category-filter";
import { useEffect, useMemo, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "@/hooks";
import { defaultLocale } from "@/i18n";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton"


const normalize = (value: string) => value.toLowerCase();
const PAGE_SIZE = 5;

const CATEGORY_LABELS: Record<string, Partial<Record<Locale, string>>> = {
  "BI / Visualization": {
    en: "BI / Visualization",
    zh: "BI / 可视化",
    ja: "BI / 可視化",
    es: "BI / Visualización",
    de: "BI / Visualisierung",
    fr: "BI / Visualisation",
    pt: "BI / Visualização",
    ru: "BI / Визуализация",
    id: "BI / Visualisasi",
    ar: "ذكاء الأعمال / التصور",
  },
  "Product Analytics": {
    en: "Product Analytics",
    zh: "埋点 / 产品分析",
    ja: "プロダクトアナリティクス",
    es: "Analítica de producto",
    de: "Produktanalyse",
    fr: "Analyse produit",
    pt: "Análise de produto",
    ru: "Продуктовая аналитика",
    id: "Analitik produk",
    ar: "تحليلات المنتج",
  },
  "ETL / ELT & Integration": {
    en: "ETL / ELT & Integration",
    zh: "ETL / ELT 与集成",
    ja: "ETL / ELT・連携",
    es: "ETL / ELT e Integración",
    de: "ETL / ELT & Integration",
    fr: "ETL / ELT & Intégration",
    pt: "ETL / ELT & Integração",
    ru: "ETL / ELT и интеграция",
    id: "ETL / ELT & Integrasi",
    ar: "ETL / ELT والتكامل",
  },
  "Warehouse / Lake": {
    en: "Warehouse / Lake",
    zh: "数据仓库 / 数据湖",
    ja: "データウェアハウス / レイク",
    es: "Almacén / Lago de datos",
    de: "Data Warehouse / Data Lake",
    fr: "Entrepôt / Lac de données",
    pt: "Armazém / Data Lake",
    ru: "Хранилище / Озеро данных",
    id: "Gudang / Data Lake",
    ar: "مستودع بيانات / بحيرة بيانات",
  },
  "Notebook / Collaborative Analytics": {
    en: "Notebook / Collaborative Analytics",
    zh: "笔记本 / 协作分析",
    ja: "ノートブック / コラボ分析",
    es: "Notebook / Analítica colaborativa",
    de: "Notebook / Kollaborative Analysen",
    fr: "Notebook / Analytics collaborative",
    pt: "Notebook / Analytics colaborativa",
    ru: "Ноутбук / Совместная аналитика",
    id: "Notebook / Analitik kolaboratif",
    ar: "دفتر ملاحظات / تحليلات تعاونية",
  },
  "Experimentation / Attribution": {
    en: "Experimentation / Attribution",
    zh: "实验 / 归因",
    ja: "実験 / アトリビューション",
    es: "Experimentación / Atribución",
    de: "Experimentieren / Attribution",
    fr: "Expérimentation / Attribution",
    pt: "Experimentação / Atribuição",
    ru: "Эксперименты / Атрибуция",
    id: "Eksperimen / Atribusi",
    ar: "التجارب / الإسناد",
  },
  "Data Quality / Governance": {
    en: "Data Quality / Governance",
    zh: "数据质量 / 治理",
    ja: "データ品質 / ガバナンス",
    es: "Calidad de datos / Gobernanza",
    de: "Datenqualität / Governance",
    fr: "Qualité des données / Gouvernance",
    pt: "Qualidade de dados / Governança",
    ru: "Качество данных / Говернанс",
    id: "Kualitas data / Tata kelola",
    ar: "جودة البيانات / الحوكمة",
  },
  "ML / AutoML / AI Assistants": {
    en: "ML / AutoML / AI Assistants",
    zh: "ML / AutoML / AI 助手",
    ja: "ML / AutoML / AI アシスタント",
    es: "ML / AutoML / Asistentes de IA",
    de: "ML / AutoML / KI-Assistenten",
    fr: "ML / AutoML / Assistants IA",
    pt: "ML / AutoML / Assistentes de IA",
    ru: "ML / AutoML / AI ассистенты",
    id: "ML / AutoML / Asisten AI",
    ar: "تعلم الآلة / AutoML / مساعدين الذكاء الاصطناعي",
  },
  "Open Source / Self-hosted": {
    en: "Open Source / Self-hosted",
    zh: "开源 / 自建组件",
    ja: "オープンソース / 自社ホスト",
    es: "Código abierto / Autogestionado",
    de: "Open Source / Self-hosted",
    fr: "Open source / Auto-hébergé",
    pt: "Open source / Self-hosted",
    ru: "Open Source / Самостоятельный хостинг",
    id: "Open source / Self-hosted",
    ar: "مفتوح المصدر / مستضاف ذاتياً",
  },
};

const HOME_FEED_TEXT: Record<
  Locale,
  {
    categoriesLabel: string;
    filterHint: string;
    resultsLabel: string;
    viewDetails: string;
    searchPlaceholder: string;
  }
> = {
  en: {
    categoriesLabel: "Categories",
    filterHint: "Quickly filter by name, tags, pricing, and deployment.",
    resultsLabel: "results",
    viewDetails: "View details",
    searchPlaceholder: "Search data tools…",
  },
  zh: {
    categoriesLabel: "分类",
    filterHint: "按名称、标签、价格、部署快速筛选。",
    resultsLabel: "条结果",
    viewDetails: "查看详情",
    searchPlaceholder: "搜索数据工具…",
  },
  ja: {
    categoriesLabel: "カテゴリ",
    filterHint: "名前・タグ・価格・デプロイで素早く絞り込み。",
    resultsLabel: "件",
    viewDetails: "詳細を見る",
    searchPlaceholder: "データツールを検索…",
  },
  es: {
    categoriesLabel: "Categorías",
    filterHint: "Filtra rápido por nombre, etiquetas, precio o despliegue.",
    resultsLabel: "resultados",
    viewDetails: "Ver detalles",
    searchPlaceholder: "Buscar herramientas de datos…",
  },
  de: {
    categoriesLabel: "Kategorien",
    filterHint: "Schnell nach Name, Tags, Preis oder Deployment filtern.",
    resultsLabel: "Ergebnisse",
    viewDetails: "Details ansehen",
    searchPlaceholder: "Datentools suchen…",
  },
  fr: {
    categoriesLabel: "Catégories",
    filterHint: "Filtrer rapidement par nom, étiquettes, prix ou déploiement.",
    resultsLabel: "résultats",
    viewDetails: "Voir les détails",
    searchPlaceholder: "Rechercher des outils de données…",
  },
  pt: {
    categoriesLabel: "Categorias",
    filterHint: "Filtre rápido por nome, tags, preço ou deploy.",
    resultsLabel: "resultados",
    viewDetails: "Ver detalhes",
    searchPlaceholder: "Buscar ferramentas de dados…",
  },
  ru: {
    categoriesLabel: "Категории",
    filterHint: "Быстрый фильтр по названию, тегам, цене и деплою.",
    resultsLabel: "результатов",
    viewDetails: "Подробнее",
    searchPlaceholder: "Искать инструменты данных…",
  },
  id: {
    categoriesLabel: "Kategori",
    filterHint: "Saring cepat berdasarkan nama, tag, harga, dan deployment.",
    resultsLabel: "hasil",
    viewDetails: "Lihat detail",
    searchPlaceholder: "Cari tools data…",
  },
  ar: {
    categoriesLabel: "الفئات",
    filterHint: "صفِّ بسرعة حسب الاسم أو الوسوم أو السعر أو النشر.",
    resultsLabel: "نتيجة",
    viewDetails: "عرض التفاصيل",
    searchPlaceholder: "ابحث عن أدوات البيانات…",
  },
};

type HomeFeedContent = HomeFeedDictionary;
export function HomeFeed({ content }: { content: HomeFeedContent }) {
  const data = content;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { locale } = useLocale();
  const query = (searchParams.get("query") ?? "").toLowerCase().trim();
  const [activeCategory, setActiveCategory] = useState<string | null>(() => searchParams.get("category"));
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [isPending, startTransition] = useTransition();

  const copy = HOME_FEED_TEXT[locale] ?? HOME_FEED_TEXT.en;

  const localizedCategories = useMemo(() => {
    if (!data.categories) return [];
    return data.categories.map((cat) => {
      const localizedTitle =
        CATEGORY_LABELS[cat.title]?.[locale as Locale] ??
        CATEGORY_LABELS[cat.title]?.[defaultLocale] ??
        cat.title;
      return { ...cat, title: localizedTitle };
    });
  }, [data.categories, locale]);

  const categoryIndex = useMemo(() => {
    const map = new Map<string, Set<string>>();
    localizedCategories.forEach((cat) => {
      map.set(cat.title, new Set(cat.items));
    });
    return map;
  }, [localizedCategories]);

  // 将分类条目展开成工具卡片数据
  const combinedTools = useMemo(() => {
    const list = [...data.tools];
    const existing = new Set(list.map((t) => t.name));

    localizedCategories.forEach((cat) => {
      cat.items.forEach((item) => {
        if (existing.has(item)) return;
        list.push({
          name: item,
          summary: `${cat.title} · 推荐工具`,
          tags: [cat.title],
          pricing: "未提供",
          deployment: "未提供",
          link: "#",
          votes: 0,
          comments: 0,
        });
      });
    });

    return list;
  }, [localizedCategories, data.tools]);

  const handleCategoryChange = (category: string | null) => {
    startTransition(() => {
      setActiveCategory(category);
      // 切换分类时清空搜索词并回到第一页，避免 query + page 残留导致列表为空
      const params = new URLSearchParams(searchParams);
      if (params.has("query")) params.delete("query");
      params.delete("page");
      if (category) {
        params.set("category", category);
      } else {
        params.delete("category");
      }
      const next = params.toString();
      replace(next ? `${pathname}?${next}` : pathname);
    });
  };

  // 这段 useMemo 用来按当前分类 activeCategory 生成一个派生的工具列表 filteredByCategory
  const filteredByCategory = useMemo(() => {
    // 没有选中分类时，直接返回全部 combinedTools
    if (!activeCategory) return combinedTools;
    // 有分类时，先规范化分类名 term，再从 categoryIndex 取出该分类下的工具名集合 nameSet。
    const term = normalize(activeCategory);
    const nameSet = categoryIndex.get(activeCategory);
    // 最终返回满足条件的工具：要么工具名在 nameSet 里，要么工具的标签 tags 中有规范化后包含 term 的项。
    return combinedTools.filter((tool) =>
      (nameSet?.has(tool.name) ?? false) ||
      tool.tags.some((tag) => normalize(tag).includes(term)),
    );
  }, [combinedTools, activeCategory, categoryIndex]);

  // 这段 useMemo 定义并缓存按搜索词 query 过滤后的工具列表 filteredTools
  const filteredTools = useMemo(() => {
    // 如果没有搜索词（!query），直接用上一步按分类得到的 filteredByCategory。
    if (!query) return filteredByCategory;
    return filteredByCategory.filter((tool) =>
      `${tool.name} ${tool.summary} ${tool.tags.join(" ")}`.toLowerCase().includes(query),
    );
  }, [filteredByCategory, query]);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(filteredTools.length / PAGE_SIZE)), [filteredTools]);
  const pageParam = Number(searchParams.get("page") ?? "1");
  const parsedPage = Number.isFinite(pageParam) && pageParam > 0 ? Math.floor(pageParam) : 1;
  const currentPage = Math.min(parsedPage, totalPages);

  const paginatedTools = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredTools.slice(start, start + PAGE_SIZE);
  }, [filteredTools, currentPage]);

  const makePageHref = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page <= 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }
    const next = params.toString();
    return next ? `${pathname}?${next}` : pathname;
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    startTransition(() => {
      replace(makePageHref(page));
    });
  };

  const buildDetailHref = useMemo(() => {
    return (tool: HomeFeedTool) => {
      const base = (tool.link ?? "").trim();
      if (!base || base === "#") return "#";
      if (/^https?:\/\//i.test(base)) return base;
      const normalized = base.startsWith("/") ? base.slice(1) : base;
      if (!normalized) {
        return locale === defaultLocale ? "/" : `/${locale}`;
      }
      return locale === defaultLocale ? `/${normalized}` : `/${locale}/${normalized}`;
    };
  }, [locale]);

  const buildOfficialHref = useMemo(() => {
    return (tool: HomeFeedTool) => tool.officialUrl ?? tool.link ?? "#";
  }, []);

  useEffect(() => {
    // 同步 URL 上的 category 参数到状态，保证返回时保留选择
    const urlCategory = searchParams.get("category");
    setActiveCategory(urlCategory);

    let timer: NodeJS.Timeout | undefined;
    if (isPending) {
      // 仅在加载感知明显时才显示骨架，避免强制延迟
      timer = setTimeout(() => setShowSkeleton(true), 350);
    } else {
      setShowSkeleton(false);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isPending, searchParams]);

  const renderSkeletons = () =>
    Array.from({ length: PAGE_SIZE }).map((_, idx) => (
      <div
        key={idx}
        className="overflow-hidden rounded-xl border border-[#1e5bff]/20 bg-[#0b162e]/70 p-4 shadow-[0_10px_30px_-18px_rgba(30,91,255,0.45)]"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <Skeleton className="h-9 w-9 rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-3 w-64" />
            </div>
          </div>
          <div className="space-y-2 text-right">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-3 w-14" />
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-14" />
          <Skeleton className="h-5 w-12" />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-24 rounded-md" />
        </div>
      </div>
    ));

  return (
    <main className="bg-gradient-to-b from-[#0a0f1f] via-[#0c1e3c] to-[#0a0f1f]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 lg:flex-row lg:gap-10">
        {/* 左侧导航：分类按钮 */}
        {localizedCategories.length ? (
          <aside className="hidden lg:block fixed left-6 top-28 z-40 w-64">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-100 uppercase tracking-wide">
                {copy.categoriesLabel}
              </p>
              <CategoryFilter
                categories={localizedCategories}
                active={activeCategory}
                onChange={handleCategoryChange}
              />
            </div>
          </aside>
        ) : null}

        {/* 右侧：工具列表 */}
        <div className="flex-1 space-y-4 lg:pl-72">
          <div className="flex flex-col items-center gap-1 text-center">
            <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
              {data.subheading}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50">
              {data.heading}
            </h1>
          </div>

          <div className="flex flex-col gap-3 rounded-xl border border-[#1e5bff]/30 bg-[#0f172a]/80 p-4 shadow-[0_15px_40px_-20px_rgba(18,194,233,0.55)]">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <Search placeholder={data.searchPlaceholder ?? copy.searchPlaceholder} />
            </div>
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>{data.filterHint ?? copy.filterHint}</span>
              <span>
                {filteredTools.length} {data.resultsLabel ?? copy.resultsLabel}
              </span>
            </div>
            {localizedCategories.length ? (
              <div className="lg:hidden">
                <CategoryFilter
                  categories={localizedCategories}
                  active={activeCategory}
                  onChange={handleCategoryChange}
                />
              </div>
            ) : null}
          </div>

          <div className="grid grid-cols-1 gap-4">
            {showSkeleton
              ? renderSkeletons()
              : paginatedTools.map((tool) => (
                  <ToolCard
                    key={tool.name}
                    tool={tool}
                    highlightTerm={query}
                    detailHref={buildDetailHref(tool)}
                    officialHref={buildOfficialHref(tool)}
                    detailLabel={data.viewDetailsLabel ?? copy.viewDetails}
                  />
                ))}
          </div>
          {totalPages > 1 ? (
            <Pagination className="pt-2">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={makePageHref(Math.max(1, currentPage - 1))}
                    onClick={(e) => {
                      e.preventDefault();
                      goToPage(currentPage - 1);
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    aria-disabled={currentPage === 1}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const pageNumber = idx + 1;
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        href={makePageHref(pageNumber)}
                        isActive={pageNumber === currentPage}
                        onClick={(e) => {
                          e.preventDefault();
                          goToPage(pageNumber);
                        }}
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                <PaginationItem>
                  <PaginationNext
                    href={makePageHref(Math.min(totalPages, currentPage + 1))}
                    onClick={(e) => {
                      e.preventDefault();
                      goToPage(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    aria-disabled={currentPage === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          ) : null}
        </div>
      </div>
    </main>
  );
}
