import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { SigmaPageContent } from "@/components/pages/sigma-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sigma — 表格体验的云仓 BI",
  description: "Sigma 提供类 Excel 界面与云数据仓库直算，适合业务团队实时自助分析。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "sigma"),
  },
};

export default function SigmaPage() {
  return <SigmaPageContent locale={defaultLocale} />;
}
