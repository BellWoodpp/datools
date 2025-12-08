import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { HevoPageContent } from "@/components/pages/hevo-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hevo — 无代码数据管道",
  description: "Hevo 支持多源到仓库/湖的实时与批量同步，内置监控告警与无代码配置。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "hevo"),
  },
};

export default function HevoPage() {
  return <HevoPageContent locale={defaultLocale} />;
}
