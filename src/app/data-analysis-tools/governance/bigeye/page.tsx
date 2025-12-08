import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { BigeyePageContent } from "@/components/pages/bigeye-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Bigeye — 数据质量监控",
  description: "Bigeye 提供自助规则、SLA、异常检测与告警，保障关键数据集健康。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "governance", "bigeye"),
  },
};

export default function BigeyePage() {
  return <BigeyePageContent locale={defaultLocale} />;
}
