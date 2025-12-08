import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { DbtTestsPageContent } from "@/components/pages/dbt-tests-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "dbt tests — 模型级数据质量",
  description: "dbt tests 提供内置与自定义断言，结合 CI 与文档实现模型质量校验。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "governance", "dbt-tests"),
  },
};

export default function DbtTestsPage() {
  return <DbtTestsPageContent locale={defaultLocale} />;
}
