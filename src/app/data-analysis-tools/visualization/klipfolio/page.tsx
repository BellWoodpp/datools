import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { KlipfolioPageContent } from "@/components/pages/klipfolio-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Klipfolio — KPI 仪表板与监控",
  description: "Klipfolio 以拖拽方式构建 KPI 仪表板，提供丰富连接器、刷新与告警、分享与嵌入。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "klipfolio"),
  },
};

export default function KlipfolioPage() {
  return <KlipfolioPageContent locale={defaultLocale} />;
}
