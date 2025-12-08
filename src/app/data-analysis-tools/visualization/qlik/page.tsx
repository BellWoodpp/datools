import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { QlikPageContent } from "@/components/pages/qlik-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Qlik Sense — 关联引擎自助式分析",
  description: "Qlik 基于关联内存引擎，支持自助可视化、实时探索与数据集成，适合运营监控与多源分析。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "qlik"),
  },
};

export default function QlikPage() {
  return <QlikPageContent locale={defaultLocale} />;
}
