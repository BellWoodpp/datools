'use client';

import { Button } from "@/components/ui/button";
import type { HomeFeedDictionary } from "@/i18n/types";
import {
  ChartNoAxesCombined,
  PackageSearch,
  Pipette,
  Warehouse,
  NotebookPen,
  FlaskConical,
  TextSearch,
  Landmark,
  PackageOpen,
  Server,
} from "lucide-react";

type Category = NonNullable<HomeFeedDictionary["categories"]>[number];

interface CategoryFilterProps {
  categories: Category[];
  active: string | null;
  onChange: (title: string | null) => void;
}

export function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  const current = active ?? "";

  if (!categories.length) return null;

  const getIcon = (title: string) => {
    const iconClass = "h-7 w-7 text-[#12c2e9]";
    const iconLarge = "h-8 w-8 text-[#12c2e9]";
    const normalized = title.toLowerCase();
    if (normalized.includes("bi") || normalized.includes("visualization")) {
      return <ChartNoAxesCombined className={iconClass} />;
    }
    if (normalized.includes("product analytics")) {
      return <PackageSearch className={iconClass} />;
    }
    if (normalized.includes("etl") || normalized.includes("integration")) {
      return <Pipette className={iconClass} />;
    }
    if (normalized.includes("warehouse") || normalized.includes("lake")) {
      return <Warehouse className={iconClass} />;
    }
    if (normalized.includes("notebook")) {
      return <NotebookPen className={iconClass} />;
    }
    if (normalized.includes("experiment")) {
      return <FlaskConical className={iconClass} />;
    }
    if (normalized.includes("quality") || normalized.includes("governance")) {
      return (
        <span className="flex items-center gap-1 text-[#12c2e9]">
          <TextSearch className={iconLarge} />
          <span className="text-sm text-slate-200">/</span>
          <Landmark className={iconLarge} />
        </span>
      );
    }
    if (normalized.includes("ml") || normalized.includes("ai")) {
      return (
        <span className="flex items-center gap-1 text-[#12c2e9]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={iconLarge}
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
            className={iconLarge}
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
            className={iconLarge}
          >
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
          </svg>
        </span>
      );
    }
    if (normalized.includes("open source") || normalized.includes("self-hosted") || normalized.includes("open")) {
      return (
        <span className="flex items-center gap-1 text-[#12c2e9]">
          <PackageOpen className={iconLarge} />
          <span className="text-sm text-slate-200">/</span>
          <Server className={iconLarge} />
        </span>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-2">
      {categories.map((cat) => (
        <Button
          key={cat.title}
          variant={cat.title === current ? "default" : "outline"}
          size="sm"
          className="group relative flex h-12 w-14 items-center gap-3 overflow-hidden rounded-md px-2.5 text-left leading-tight transition-all duration-200 hover:w-full hover:px-3 justify-start"
          onClick={() => onChange(cat.title === current ? null : cat.title)}
        >
          <span className="flex items-center gap-2">
            {getIcon(cat.title)}
            <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {cat.title}
            </span>
          </span>
        </Button>
      ))}
    </div>
  );
}
