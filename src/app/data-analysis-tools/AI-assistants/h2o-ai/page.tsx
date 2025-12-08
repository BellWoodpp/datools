import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { H2OAIPageContent } from "@/components/pages/h2oai-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "H2O.ai — AutoML & Driverless AI",
  description:
    "H2O.ai 结合开源 H2O-3 与 Driverless AI，提供自动特征工程、可解释性与 MLOps 的自托管/云端方案。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "AI-assistants", "h2o-ai"),
  },
};

export default function H2OAIPage() {
  return <H2OAIPageContent locale={defaultLocale} />;
}
