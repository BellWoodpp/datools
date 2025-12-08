import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { PendoPageContent } from "@/components/pages/pendo-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pendo — 产品体验与分析",
  description: "Pendo 提供行为分析、应用内引导与反馈收集，助力功能采用与留存。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "pendo"),
  },
};

export default function PendoPage() {
  return <PendoPageContent locale={defaultLocale} />;
}
