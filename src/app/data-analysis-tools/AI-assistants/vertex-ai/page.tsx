import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { VertexAIPageContent } from "@/components/pages/vertex-ai-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Vertex AI — Unified ML/AutoML/GenAI on Google Cloud",
  description:
    "Vertex AI 提供 AutoML、生成式模型、Pipelines、Feature Store 与监控，深度集成 BigQuery 的统一 ML 平台。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "AI-assistants", "vertex-ai"),
  },
};

export default function VertexAIPage() {
  return <VertexAIPageContent locale={defaultLocale} />;
}
