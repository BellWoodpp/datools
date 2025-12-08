import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { LogRocketPageContent } from "@/components/pages/logrocket-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "LogRocket — 前端监控与体验分析",
  description: "LogRocket 结合 Session 回放、性能监控与行为分析，定位前端与体验问题。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "logrocket"),
  },
};

export default function LogRocketPage() {
  return <LogRocketPageContent locale={defaultLocale} />;
}
