import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { FivetranPageContent } from "@/components/pages/fivetran-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Fivetran — 全托管 ELT 管道",
  description: "Fivetran 提供托管连接器、增量同步与监控，将数据库与 SaaS 数据写入云仓/数据湖。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "fivetran"),
  },
};

export default function FivetranPage() {
  return <FivetranPageContent locale={defaultLocale} />;
}
