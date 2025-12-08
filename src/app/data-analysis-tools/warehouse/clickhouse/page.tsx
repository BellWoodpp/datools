import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { ClickHousePageContent } from "@/components/pages/clickhouse-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "ClickHouse — Data analysis tool",
  description:
    "Open-source columnar database for real-time/near-real-time analytics with self-hosted and cloud options.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "clickhouse"),
  },
};

export default function ClickHousePage() {
  return <ClickHousePageContent locale={defaultLocale} />;
}
