import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { FireboltPageContent } from "@/components/pages/warehouse/firebolt-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Firebolt — Data analysis tool",
  description:
    "Cloud-native MPP warehouse focused on high-performance queries with indexing and storage optimizations.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "warehouse", "firebolt"),
  },
};

export default function FireboltPage() {
  return <FireboltPageContent locale={defaultLocale} />;
}
