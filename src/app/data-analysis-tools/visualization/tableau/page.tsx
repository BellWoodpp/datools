import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { TableauPageContent } from "@/components/pages/tableau-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tableau 数据可视化与 BI 介绍",
  description:
    "Tableau：拖拽式交互 BI，连接数据库、表格和云服务，覆盖 Prep 清洗、Desktop/Cloud 分析与 Server/Cloud 协作。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "tableau"),
  },
};

export default function TableauPage() {
  return <TableauPageContent locale={defaultLocale} />;
}
