import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { ObservablePageContent } from "@/components/pages/collaborative-analytics/observable-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Observable — Data analysis tool",
  description:
    "Browser-based notebook and visualization platform using JavaScript/Observable syntax for interactive data stories.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "collaborative-analytics", "observable"),
  },
};

export default function ObservablePage() {
  return <ObservablePageContent locale={defaultLocale} />;
}
