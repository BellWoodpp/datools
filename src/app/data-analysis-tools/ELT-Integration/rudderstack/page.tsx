import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { RudderStackPageContent } from "@/components/pages/rudderstack-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "RudderStack — 开源 CDP / 事件管道",
  description: "RudderStack 兼容 Segment API，支持自托管或云端，将事件送仓库与下游工具。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "rudderstack"),
  },
};

export default function RudderStackPage() {
  return <RudderStackPageContent locale={defaultLocale} />;
}
