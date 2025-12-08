import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { GreatExpectationsPageContent } from "@/components/pages/great-expectations-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Great Expectations — Open-source data quality",
  description:
    "Great Expectations 提供基于期望的开源数据质量校验与文档，支持自托管与云端。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "great-expectations"),
  },
};

export default function GreatExpectationsPage() {
  return <GreatExpectationsPageContent locale={defaultLocale} />;
}
