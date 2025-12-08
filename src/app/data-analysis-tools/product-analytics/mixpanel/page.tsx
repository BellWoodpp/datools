import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { MixpanelPageContent } from "@/components/pages/mixpanel-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mixpanel — 事件与留存分析",
  description: "Mixpanel 提供事件、漏斗、留存、分群与信号分析，用于产品优化与增长。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "mixpanel"),
  },
};

export default function MixpanelPage() {
  return <MixpanelPageContent locale={defaultLocale} />;
}
