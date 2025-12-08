import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { LookerStudioPageContent } from "@/components/pages/looker-studio-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Looker Studio — 免费仪表板与可视化",
  description: "Looker Studio（原 Data Studio）提供拖拽式报表、丰富连接器与分享嵌入，适合轻量报表场景。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "looker-studio"),
  },
};

export default function LookerStudioPage() {
  return <LookerStudioPageContent locale={defaultLocale} />;
}
