import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { SageMakerPageContent } from "@/components/pages/sagemaker-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Amazon SageMaker — Managed ML & AutoML",
  description:
    "SageMaker 覆盖 Studio、Autopilot、训练推理与 Model Registry/MLOps，提供在 AWS 上的端到端机器学习。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "AI-assistants", "sagemaker"),
  },
};

export default function SageMakerPage() {
  return <SageMakerPageContent locale={defaultLocale} />;
}
