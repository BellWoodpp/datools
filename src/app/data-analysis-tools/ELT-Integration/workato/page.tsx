import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { WorkatoPageContent } from "@/components/pages/workato-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Workato — 企业级集成与自动化",
  description: "Workato 提供触发器、工作流、数据同步与治理，支持跨部门的安全集成。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "workato"),
  },
};

export default function WorkatoPage() {
  return <WorkatoPageContent locale={defaultLocale} />;
}
