import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { GreatExpectationsPageContent } from "@/components/pages/great-expectations-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Great Expectations — 开源数据质量框架",
  description: "Great Expectations 基于 Expectation 定义校验规则，生成数据文档并集成管道。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "governance", "great-expectations"),
  },
};

export default function GreatExpectationsPage() {
  return <GreatExpectationsPageContent locale={defaultLocale} />;
}
