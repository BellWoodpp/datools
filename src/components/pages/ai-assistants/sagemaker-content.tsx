import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://aws.amazon.com/sagemaker/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "ML 平台 · Amazon SageMaker",
    title: "SageMaker：AWS 托管 ML / AutoML 平台",
    subtitle: "Studio/Notebook、Autopilot、训练推理、Model Registry 与监控",
    description:
      "Amazon SageMaker 是 AWS 的托管机器学习平台，覆盖数据准备、训练、AutoML（Autopilot）、部署推理与监控。提供 Studio IDE、Pipelines、Feature Store、Model Registry、Debugger/Profiler 等工具，加速端到端上线。",
    highlights: [
      { title: "Studio 与 Notebook", description: "统一 IDE、内置数据准备与调试分析（Debugger/Profiler），支持多账户与权限。" },
      { title: "Autopilot AutoML", description: "自动选择算法与特征处理，生成可编辑的 Notebook 与可直接部署的端点。" },
      { title: "训练与推理", description: "内置算法与容器，支持批量/实时/Serverless 推理、批量转换与多模态模型。" },
      { title: "MLOps 与治理", description: "Pipelines、Model Registry、监控/漂移检测与 Lineage，便于合规与运维。" },
    ],
    useCases: [
      "在 AWS 上的端到端建模与部署",
      "实时或批量推理服务",
      "自动化基线模型与快速试验",
      "有审计/合规要求的 ML 工作流",
    ],
    ctaVisit: "访问 SageMaker",
    ctaBack: "返回首页",
  },
  en: {
    badge: "ML platform · Amazon SageMaker",
    title: "SageMaker: managed ML/AutoML on AWS",
    subtitle: "Studio/Notebooks, Autopilot, training/inference, Model Registry, and monitoring",
    description:
      "Amazon SageMaker is AWS's managed ML platform covering data prep, training, AutoML (Autopilot), deployment, and monitoring. Studio IDE, Pipelines, Feature Store, Model Registry, and Debugger/Profiler accelerate end-to-end production on AWS.",
    highlights: [
      { title: "Studio & notebooks", description: "Unified IDE with data prep and debugging/profiling, integrated with AWS identity and policies." },
      { title: "Autopilot AutoML", description: "Automatic algorithm/feature selection producing editable notebooks and deployable endpoints." },
      { title: "Training & inference", description: "Built-in algorithms/containers with batch, real-time, and serverless inference plus batch transform." },
      { title: "MLOps & governance", description: "Pipelines, Model Registry, monitoring/drift detection, and lineage for compliant operations." },
    ],
    useCases: [
      "End-to-end ML and deployment on AWS",
      "Real-time or batch inference services",
      "Fast baseline AutoML experiments",
      "Auditable ML workflows with governance needs",
    ],
    ctaVisit: "Visit SageMaker",
    ctaBack: "Back to home",
  },
};

export function SageMakerPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
