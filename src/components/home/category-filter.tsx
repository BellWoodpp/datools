'use client';

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { HomeFeedDictionary } from "@/i18n/types";
import type { ReactElement } from "react";
import {
  ChartNoAxesCombined,
  PackageSearch,
  Pipette,
  Warehouse,
  NotebookPen,
  FlaskConical,
  Loader,
  Blocks,
  Kayak,
  Handshake,
  ClipboardPen,
  Landmark,
  TextSearch,
  PackageOpen,
  Server,
} from "lucide-react";

type Category = NonNullable<HomeFeedDictionary["categories"]>[number];

function BriefcaseBusinessIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-label="Briefcase Business"
    >
      <path d="M12 12h.01" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

type IconKey =
  | "bi"
  | "product"
  | "etl"
  | "warehouse"
  | "notebook"
  | "experiment"
  | "governance"
  | "ml"
  | "openSource";

type IconDefinition = {
  count: number;
  render: (options: { iconClass: string; groupClass: string }) => ReactElement;
};

const iconDefinitions: Record<IconKey, IconDefinition> = {
  bi: {
    count: 2,
    render: ({ iconClass, groupClass }) => (
      <span className={groupClass}>
        <BriefcaseBusinessIcon className={iconClass} />
        <ChartNoAxesCombined className={iconClass} />
      </span>
    ),
  },
  product: {
    count: 1,
    render: ({ iconClass }) => <PackageSearch className={iconClass} />,
  },
  etl: {
    count: 3,
    render: ({ iconClass, groupClass }) => (
      <span className={groupClass}>
        <Pipette className={iconClass} />
        <Loader className={iconClass} />
        <Blocks className={iconClass} />
      </span>
    ),
  },
  warehouse: {
    count: 2,
    render: ({ iconClass, groupClass }) => (
      <span className={groupClass}>
        <Warehouse className={iconClass} />
        <Kayak className={iconClass} />
      </span>
    ),
  },
  notebook: {
    count: 2,
    render: ({ iconClass, groupClass }) => (
      <span className={groupClass}>
        <NotebookPen className={iconClass} />
        <Handshake className={iconClass} />
      </span>
    ),
  },
  experiment: {
    count: 2,
    render: ({ iconClass, groupClass }) => (
      <span className={groupClass}>
        <FlaskConical className={iconClass} />
        <ClipboardPen className={iconClass} />
      </span>
    ),
  },
  governance: {
    count: 2,
    render: ({ iconClass, groupClass }) => (
      <span className={groupClass}>
        <TextSearch className={iconClass} />
        <Landmark className={iconClass} />
      </span>
    ),
  },
  ml: {
    count: 3,
    render: ({ iconClass, groupClass }) => (
      <span className={groupClass}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
        >
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <path d="M22 10v6" />
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
        >
          <path d="M12 12h.01" />
          <path d="M16 12h.01" />
          <path d="m17 7 5 5-5 5" />
          <path d="m7 7-5 5 5 5" />
          <path d="M8 12h.01" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
        >
          <path d="M12 8V4H8" />
          <rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </svg>
      </span>
    ),
  },
  openSource: {
    count: 2,
    render: ({ iconClass, groupClass }) => (
      <span className={groupClass}>
        <PackageOpen className={iconClass} />
        <Server className={iconClass} />
      </span>
    ),
  },
};

const keywordIconMap: { key: IconKey; keywords: string[] }[] = [
  { key: "bi", keywords: ["bi", "visualization", "可视化", "商业智能"] },
  { key: "product", keywords: ["product analytics", "埋点", "产品分析", "产品"] },
  { key: "etl", keywords: ["etl", "integration", "集成"] },
  { key: "warehouse", keywords: ["warehouse", "lake", "数据湖", "仓库"] },
  { key: "notebook", keywords: ["notebook", "协作", "笔记本"] },
  { key: "experiment", keywords: ["experiment", "实验", "归因"] },
  { key: "governance", keywords: ["quality", "governance", "治理", "数据质量"] },
  { key: "ml", keywords: ["ml", "ai", "助手"] },
  { key: "openSource", keywords: ["open source", "self-hosted", "开源", "自建"] },
];

const iconFallbackOrder: IconKey[] = [
  "bi",
  "product",
  "etl",
  "warehouse",
  "notebook",
  "experiment",
  "governance",
  "ml",
  "openSource",
];

const getIcon = (title: string, index: number) => {
  const normalized = title.toLowerCase();
  const matchedKey = keywordIconMap.find(({ keywords }) =>
    keywords.some((keyword) => normalized.includes(keyword.toLowerCase()))
  )?.key;

  const iconKey = matchedKey ?? iconFallbackOrder[index];
  if (!iconKey) return null;

  const definition = iconDefinitions[iconKey];
  const count = definition.count;
  const iconClass =
    count >= 3 ? "size-3.5 text-[#12c2e9]" : count === 2 ? "size-4 text-[#12c2e9]" : "size-5 text-[#12c2e9]";
  const groupClass = cn(
    "flex items-center justify-center",
    count >= 3 ? "gap-0.5" : "gap-1"
  );

  return {
    count,
    node: definition.render({ iconClass, groupClass }),
  };
};

interface CategoryFilterProps {
  categories: Category[];
  active: string | null;
  onChange: (title: string | null) => void;
}

export function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  const current = active ?? "";

  return (
    <div className="flex flex-col gap-2">
      {categories.map((cat, index) => {
        const icon = getIcon(cat.title, index);
        const circleSizeClass = "h-12 w-12";

        return (
          <Button
            key={cat.title}
            variant={cat.title === current ? "default" : "outline"}
            size="sm"
            className={cn(
              "group relative z-0 flex h-12 w-12 items-center justify-start gap-0 overflow-visible rounded-full p-0 text-left leading-tight hover:z-10 focus-visible:z-10",
              circleSizeClass
            )}
            onClick={() => onChange(cat.title === current ? null : cat.title)}
          >
            <span
              aria-hidden
              className="absolute left-0 top-0 z-0 flex h-12 items-center rounded-full border border-[#1e5bff]/25 bg-[#0b162e]/75 pl-12 pr-4 text-sm font-semibold text-slate-100 shadow-[0_16px_44px_-24px_rgba(18,194,233,0.6)] opacity-0 translate-x-2 scale-x-95 origin-left transition-[opacity,transform] duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-x-100 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:scale-x-100"
            >
              <span className="whitespace-nowrap">{cat.title}</span>
            </span>

            <span className={cn("relative flex shrink-0 items-center justify-center", circleSizeClass)}>
              <span
                aria-hidden
                className="absolute inset-0 rounded-full bg-[#0b162e]/55 shadow-[0_10px_28px_-16px_rgba(18,194,233,0.55)] transition-transform duration-200 ease-out group-hover:scale-110 group-focus-visible:scale-110"
              />
              <span
                aria-hidden
                className="absolute inset-0 rounded-full border border-[#12c2e9]/30"
              />
              <span className="relative z-10">{icon?.node}</span>
            </span>
            <span className="sr-only">{cat.title}</span>
          </Button>
        );
      })}
    </div>
  );
}

export function CategoryIconRow({
  categories,
  active,
  onChange,
}: {
  categories: Category[];
  active: string | null;
  onChange: (title: string | null) => void;
}) {
  if (!categories.length) return null;

  return (
    <div className="flex w-full items-center justify-center gap-2">
      {categories.map((cat, index) => {
        const icon = getIcon(cat.title, index);
        if (!icon) return null;
        const circleSizeClass = "h-12 w-12";
        const isActive = cat.title === active;

        return (
          <button
            key={cat.title}
            type="button"
            onClick={() => onChange(cat.title === active ? null : cat.title)}
            className="group relative flex shrink-0 items-center justify-center"
            aria-pressed={isActive}
            aria-label={cat.title}
          >
            <span
              className={cn(
                "relative flex items-center justify-center transition-transform duration-200 ease-out",
                circleSizeClass,
                isActive ? "scale-105" : "hover:scale-105"
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "absolute inset-0 rounded-full bg-[#0b162e]/55 shadow-[0_10px_28px_-16px_rgba(18,194,233,0.55)]",
                  isActive ? "shadow-[0_12px_36px_-18px_rgba(18,194,233,0.8)]" : null
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "absolute inset-0 rounded-full border",
                  isActive ? "border-[#12c2e9]/80" : "border-[#12c2e9]/30"
                )}
              />
              <span className="relative z-10">{icon.node}</span>
            </span>
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#1e5bff]/30 bg-[#0b162e]/90 px-3 py-1 text-[11px] font-semibold text-slate-100 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              {cat.title}
            </span>
            <span className="sr-only">{cat.title}</span>
          </button>
        );
      })}
    </div>
  );
}
