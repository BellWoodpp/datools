import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { ZapierPageContent } from "@/components/pages/zapier-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Zapier — 无代码自动化",
  description: "Zapier 连接数千 SaaS，通过触发器执行多步工作流，适合业务与个人效率。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "zapier"),
  },
};

export default function ZapierPage() {
  return <ZapierPageContent locale={defaultLocale} />;
}
