import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { AmplitudePageContent } from "@/components/pages/amplitude-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Amplitude — 产品行为与增长分析",
  description: "Amplitude 提供事件、漏斗、留存、分群与实验能力，服务产品与增长决策。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "amplitude"),
  },
};

export default function AmplitudePage() {
  return <AmplitudePageContent locale={defaultLocale} />;
}
