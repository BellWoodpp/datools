import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.prefect.io/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "开源 · Prefect",
    title: "Prefect：Python 流程编排与观察",
    subtitle: "Prefect Flows、Blocks、部署与云/自托管监控",
    description:
      "Prefect 是开源的工作流与数据流编排工具，使用 Python 定义 Flow/Task，提供重试、缓存、参数化、并发与依赖管理。通过 Blocks/Deployments 与 UI/Cloud，可获得可观测性、调度与告警，适合混合云与本地运行。",
    highlights: [
      { title: "Pythonic 开发体验", description: "用 Python 定义 Flow/Task，支持异步、映射、参数与缓存。" },
      { title: "运行时弹性", description: "重试、超时、并发控制与检查点，提升管道稳定性。" },
      { title: "Blocks 与部署", description: "可复用 Blocks 管理存储、队列、凭据；Deployments 提供调度与版本。" },
      { title: "监控与告警", description: "UI/Cloud 视图、日志、健康检查与告警，支持混合运行与 RBAC。" },
    ],
    useCases: [
      "Python 数据与 ML 流程编排",
      "需要灵活重试/缓存的任务流",
      "混合云/本地调度与监控",
      "轻量自托管工作流平台",
    ],
    ctaVisit: "访问 Prefect",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Open source · Prefect",
    title: "Prefect: Python workflow orchestration",
    subtitle: "Flows/Tasks with Blocks, deployments, and cloud/self-hosted monitoring",
    description:
      "Prefect is an open-source workflow orchestrator using Python-defined Flows/Tasks with retries, caching, parameters, concurrency, and dependency management. Blocks/Deployments plus the UI/Cloud bring scheduling, observability, and alerts for hybrid or on-prem runs.",
    highlights: [
      { title: "Pythonic UX", description: "Define Flows/Tasks in Python with async, mapping, parameters, and caching." },
      { title: "Runtime resilience", description: "Retries, timeouts, concurrency limits, and checkpoints improve stability." },
      { title: "Blocks & deployments", description: "Reusable Blocks for storage/queues/credentials; Deployments for scheduling and versions." },
      { title: "Monitoring & alerts", description: "UI/Cloud views, logs, health checks, and alerts with hybrid execution and RBAC." },
    ],
    useCases: [
      "Python data and ML workflow orchestration",
      "Task flows needing flexible retries/caching",
      "Hybrid cloud/on-prem scheduling and monitoring",
      "Lightweight self-hosted workflow platform",
    ],
    ctaVisit: "Visit Prefect",
    ctaBack: "Back to home",
  },
};

export function PrefectPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
