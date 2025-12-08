import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { HeapPageContent } from "@/components/pages/heap-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Heap — 自动采集的产品分析",
  description: "Heap 通过自动采集提供漏斗、留存与路径分析，快速获得产品洞察。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "heap"),
  },
};

export default function HeapPage() {
  return <HeapPageContent locale={defaultLocale} />;
}
