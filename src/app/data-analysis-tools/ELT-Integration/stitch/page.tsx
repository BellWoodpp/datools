import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { StitchPageContent } from "@/components/pages/stitch-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Stitch — 轻量云端 ELT",
  description: "Stitch（Talend）提供常用连接器与调度，快速把数据库/SaaS 数据写入仓库。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "stitch"),
  },
};

export default function StitchPage() {
  return <StitchPageContent locale={defaultLocale} />;
}
