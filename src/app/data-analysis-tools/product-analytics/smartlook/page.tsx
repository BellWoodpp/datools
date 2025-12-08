import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { SmartlookPageContent } from "@/components/pages/smartlook-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Smartlook — 体验回放与行为分析",
  description: "Smartlook 提供 Session 回放、漏斗、热力图与事件追踪，定位体验与转化问题。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "smartlook"),
  },
};

export default function SmartlookPage() {
  return <SmartlookPageContent locale={defaultLocale} />;
}
