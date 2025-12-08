import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { H2OAIPageContent } from "@/components/pages/h2oai-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "H2O.ai — AutoML & Driverless AI",
  description:
    "Open-source H2O-3 plus Driverless AI for automated feature engineering, time series, explainability, and self-hosted or cloud AutoML.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "AI-assistants", "h2o-ai"),
  },
};

export default function H2OAIPage() {
  return <H2OAIPageContent locale={defaultLocale} />;
}
