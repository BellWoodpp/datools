import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { HexPageContent } from "@/components/pages/hex-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hex — Data analysis tool",
  description:
    "Collaborative notebook for data teams combining SQL, Python, and visualizations with easy sharing and apps.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "collaborative-analytics", "hex"),
  },
};

export default function HexPage() {
  return <HexPageContent locale={defaultLocale} />;
}
