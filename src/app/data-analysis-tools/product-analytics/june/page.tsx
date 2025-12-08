import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { JunePageContent } from "@/components/pages/june-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "June — SaaS 指标仪表板",
  description: "June 基于事件数据提供 SaaS 指标报表，涵盖漏斗、留存、活跃与增长看板。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "june"),
  },
};

export default function JunePage() {
  return <JunePageContent locale={defaultLocale} />;
}
