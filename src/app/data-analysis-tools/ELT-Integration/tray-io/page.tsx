import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { TrayIoPageContent } from "@/components/pages/tray-io-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tray.io — 低代码 iPaaS 与自动化",
  description: "Tray.io 提供可视化集成与事件/定时触发，连接多 SaaS 构建多步工作流。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "tray-io"),
  },
};

export default function TrayIoPage() {
  return <TrayIoPageContent locale={defaultLocale} />;
}
