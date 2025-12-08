import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { HexPageContent } from "@/components/pages/hex-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hex — 协作式 SQL + Python Notebook",
  description: "Hex 融合 SQL/Python 与可视化，支持协作、分享与发布数据应用。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "collaborative-analytics", "hex"),
  },
};

export default function HexPage() {
  return <HexPageContent locale={defaultLocale} />;
}
