import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { SegmentPageContent } from "@/components/pages/segment-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Segment — CDP 与事件路由",
  description: "Segment 采集多端事件，路由到仓库与下游工具，支持身份解析与受众激活。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "segment"),
  },
};

export default function SegmentPage() {
  return <SegmentPageContent locale={defaultLocale} />;
}
