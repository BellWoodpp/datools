import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { LightdashPageContent } from "@/components/pages/lightdash-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Lightdash — 面向 dbt 的开源 BI",
  description: "Lightdash 直接读取 dbt 模型提供 Looker 风格探索与仪表板，支持自托管与云版本。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "visualization", "lightdash"),
  },
};

export default function LightdashPage() {
  return <LightdashPageContent locale={defaultLocale} />;
}
