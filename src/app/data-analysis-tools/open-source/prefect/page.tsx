import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { PrefectPageContent } from "@/components/pages/prefect-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Prefect — Open-source Python workflow orchestration",
  description:
    "Prefect 使用 Python Flow/Task 提供调度、重试、缓存与监控，支持云端与自托管。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "prefect"),
  },
};

export default function PrefectPage() {
  return <PrefectPageContent locale={defaultLocale} />;
}
