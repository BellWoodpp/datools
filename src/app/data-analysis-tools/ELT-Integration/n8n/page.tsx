import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { N8nPageContent } from "@/components/pages/n8n-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "n8n — 开源低代码自动化",
  description: "n8n 提供可视化流程、Webhook 与丰富节点，支持自托管或云端。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "n8n"),
  },
};

export default function N8nPage() {
  return <N8nPageContent locale={defaultLocale} />;
}
