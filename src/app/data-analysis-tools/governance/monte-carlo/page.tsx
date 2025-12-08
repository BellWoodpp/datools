import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { MonteCarloPageContent } from "@/components/pages/monte-carlo-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Monte Carlo — 数据可观测性",
  description: "Monte Carlo 监控数据质量、血缘与 SLA，提供告警与影响分析，提升数据可靠性。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "governance", "monte-carlo"),
  },
};

export default function MonteCarloPage() {
  return <MonteCarloPageContent locale={defaultLocale} />;
}
