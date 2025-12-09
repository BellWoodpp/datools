import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { SnowflakePageContent } from "@/components/pages/warehouse/snowflake-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Snowflake — Data analysis tool",
  description:
    "Cloud-native data warehouse with storage-compute separation, auto scaling, sharing, and strong governance.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "snowflake"),
  },
};

export default function SnowflakePage() {
  return <SnowflakePageContent locale={defaultLocale} />;
}
