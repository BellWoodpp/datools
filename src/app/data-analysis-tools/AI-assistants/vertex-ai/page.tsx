import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { VertexAIPageContent } from "@/components/pages/vertex-ai-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Vertex AI — Unified ML/AutoML/GenAI on Google Cloud",
  description:
    "Google Cloud unified ML/AutoML/GenAI platform with Model Garden, Pipelines, Feature Store, and monitoring integrated with BigQuery.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "AI-assistants", "vertex-ai"),
  },
};

export default function VertexAIPage() {
  return <VertexAIPageContent locale={defaultLocale} />;
}
