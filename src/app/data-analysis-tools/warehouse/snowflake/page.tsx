import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { SnowflakePageContent } from "@/components/pages/snowflake-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Snowflake — 云原生数据仓库",
  description: "Snowflake 提供存算分离、多云弹性与安全治理，支持数据共享与丰富生态。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "snowflake"),
  },
};

export default function SnowflakePage() {
  return <SnowflakePageContent locale={defaultLocale} />;
}
