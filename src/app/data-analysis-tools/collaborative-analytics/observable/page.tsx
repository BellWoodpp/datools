import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { ObservablePageContent } from "@/components/pages/observable-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Observable — 浏览器可视化 Notebook",
  description: "Observable 基于 JavaScript/Observable 语法构建交互可视化，支持实时协作与嵌入。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "collaborative-analytics", "observable"),
  },
};

export default function ObservablePage() {
  return <ObservablePageContent locale={defaultLocale} />;
}
