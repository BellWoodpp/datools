import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { MotherDuckPageContent } from "@/components/pages/motherduck-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "MotherDuck — DuckDB 的云协作",
  description: "MotherDuck 为 DuckDB 提供云端持久化、共享与混合查询，方便团队协作与扩展。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "motherduck"),
  },
};

export default function MotherDuckPage() {
  return <MotherDuckPageContent locale={defaultLocale} />;
}
