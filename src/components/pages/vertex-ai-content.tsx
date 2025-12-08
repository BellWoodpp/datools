import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://cloud.google.com/vertex-ai";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "ML 平台 · Vertex AI",
    title: "Vertex AI：Google Cloud 统一 ML / AutoML / GenAI 平台",
    subtitle: "AutoML、模型花园、Pipelines、Feature Store 与监控",
    description:
      "Vertex AI 是 Google Cloud 的统一机器学习平台，提供 AutoML、生成式模型（Model Garden/Generative AI Studio）、自定义训练、Pipelines、特征库与模型监控，深度集成 BigQuery 与数据云生态。",
    highlights: [
      { title: "AutoML 与模型花园", description: "表格/文本/图像 AutoML，访问与微调生成式模型（如 Gemini），亦可自定义训练。" },
      { title: "Pipelines 与工作台", description: "Pipeline 编排与 Workbench Notebook，覆盖实验、部署到端到端管理。" },
      { title: "数据与特征集成", description: "与 BigQuery、GCS 深度集成，提供 Feature Store 与向量检索选项。" },
      { title: "MLOps 与监控", description: "Model Registry、评估、监控/漂移检测与治理工具支持生产稳定性。" },
    ],
    useCases: [
      "表格/文本/图像的 AutoML 与预测服务",
      "生成式 AI API、检索增强与微调",
      "在 GCP 上的端到端 ML 管道",
      "BigQuery + ML 的一体化工作流",
    ],
    ctaVisit: "访问 Vertex AI",
    ctaBack: "返回首页",
  },
  en: {
    badge: "ML platform · Vertex AI",
    title: "Vertex AI: unified ML/AutoML/GenAI on Google Cloud",
    subtitle: "AutoML, Model Garden, Pipelines, Feature Store, and monitoring",
    description:
      "Vertex AI is Google Cloud's unified ML platform with AutoML, generative models (Model Garden/Generative AI Studio), custom training, Pipelines, Feature Store, and model monitoring tightly integrated with BigQuery and the data cloud stack.",
    highlights: [
      { title: "AutoML & model garden", description: "AutoML for tabular/text/vision plus access and fine-tuning for generative models like Gemini." },
      { title: "Pipelines & workbench", description: "Pipeline orchestration and Workbench notebooks for experiments through deployment." },
      { title: "Data & feature integration", description: "Deep integration with BigQuery/GCS, Feature Store, and vector search options." },
      { title: "MLOps & monitoring", description: "Model Registry, evaluation, monitoring/drift detection, and governance for production reliability." },
    ],
    useCases: [
      "AutoML and prediction for tabular/text/vision",
      "Generative AI APIs, retrieval-augmented flows, and fine-tuning",
      "End-to-end ML pipelines on GCP",
      "BigQuery + ML unified workflows",
    ],
    ctaVisit: "Visit Vertex AI",
    ctaBack: "Back to home",
  },
};

export function VertexAIPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
