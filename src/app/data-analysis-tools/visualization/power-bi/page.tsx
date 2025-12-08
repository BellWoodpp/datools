import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { PowerBIPageContent } from "@/components/pages/power-bi-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Power BI — Microsoft self-service BI & visualization",
  description:
    "Power BI 提供 Power Query 清洗、DAX 语义模型与交互式仪表板，连接本地与云端多源数据，深度集成 Microsoft 生态。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "power-bi"),
  },
};

export default function PowerBIPage() {
  return <PowerBIPageContent locale={defaultLocale} />;
}
