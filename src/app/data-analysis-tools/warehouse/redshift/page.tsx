import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { RedshiftPageContent } from "@/components/pages/redshift-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Amazon Redshift — 云数据仓库",
  description: "Redshift 支持 RA3 存算分离与 Spectrum 联邦查询，兼容 PostgreSQL，适合 AWS 生态。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "redshift"),
  },
};

export default function RedshiftPage() {
  return <RedshiftPageContent locale={defaultLocale} />;
}
