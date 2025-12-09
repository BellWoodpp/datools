import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { HeapPageContent } from "@/components/pages/product-analytics/heap-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Heap — Data analysis tool",
  description:
    "Autocapture product analytics; no-code event collection with funnels, retention, and pathing for fast insights.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "heap"),
  },
};

export default function HeapPage() {
  return <HeapPageContent locale={defaultLocale} />;
}
