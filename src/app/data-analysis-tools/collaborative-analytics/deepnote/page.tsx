import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { DeepnotePageContent } from "@/components/pages/deepnote-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Deepnote — 协作型云 Notebook",
  description: "Deepnote 支持 SQL 与 Python，提供实时协作、评论与分享，便于团队共建分析。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "collaborative-analytics", "deepnote"),
  },
};

export default function DeepnotePage() {
  return <DeepnotePageContent locale={defaultLocale} />;
}
