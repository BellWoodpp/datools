import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { CastorPageContent } from "@/components/pages/castor-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Castor — 数据目录与发现",
  description: "Castor 提供血缘、文档、资产评分与协作，提升数据可发现性与治理。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "governance", "castor"),
  },
};

export default function CastorPage() {
  return <CastorPageContent locale={defaultLocale} />;
}
