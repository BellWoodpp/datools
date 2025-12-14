import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { SageMakerPageContent } from "@/components/pages/ai-assistants/sagemaker-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Amazon SageMaker — Managed ML & AutoML",
  description:
    "AWS managed ML platform with Studio/Notebooks, Autopilot AutoML, built-in training/inference, Pipelines, and Model Registry.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ai-assistants", "sagemaker"),
  },
};

export default function SageMakerPage() {
  return <SageMakerPageContent locale={defaultLocale} />;
}
