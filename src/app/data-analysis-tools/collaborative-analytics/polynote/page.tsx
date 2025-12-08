import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { PolynotePageContent } from "@/components/pages/polynote-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Polynote — Polyglot notebook",
  description:
    "Open-source polyglot notebook (Scala/Python, etc.) with strong typing and reproducibility for data engineering and science.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "collaborative-analytics", "polynote"),
  },
};

export default function PolynotePage() {
  return <PolynotePageContent locale={defaultLocale} />;
}
