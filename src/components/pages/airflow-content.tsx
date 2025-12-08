import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://airflow.apache.org/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "开源 · Apache Airflow",
    title: "Airflow：Python DAG 工作流编排",
    subtitle: "定时/事件触发、任务依赖、可视化监控与插件生态",
    description:
      "Apache Airflow 是开源的工作流编排器，用 Python 定义 DAG 管理数据管道与批处理任务，支持调度、重试、回填、依赖管理与丰富的 Provider 插件，适合数据工程与分析团队自托管。",
    highlights: [
      { title: "Python DAG 定义", description: "用代码定义任务与依赖，支持动态 DAG 与模板化配置。" },
      { title: "调度与重试", description: "CRON/时间表、事件触发、重试与 SLA/回填管理。" },
      { title: "可视化监控", description: "Web UI 展示 DAG、甘特与日志，支持手动重跑与任务清理。" },
      { title: "生态与扩展", description: "大量 Provider 连接器，Kubernetes/Local/Celery/Executor 多种执行模式。" },
    ],
    useCases: [
      "批处理与 ELT 编排",
      "数据质量与依赖感知调度",
      "机器学习训练/部署流水线",
      "自托管的可审计调度平台",
    ],
    ctaVisit: "访问 Airflow",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Open source · Apache Airflow",
    title: "Airflow: Python DAG workflow orchestrator",
    subtitle: "Scheduled/event triggers, dependencies, monitoring, and rich providers",
    description:
      "Apache Airflow is an open-source workflow orchestrator using Python-defined DAGs for data pipelines and batch jobs. It offers scheduling, retries, backfills, dependency management, and a broad provider ecosystem across executors for self-hosted teams.",
    highlights: [
      { title: "Python DAGs", description: "Define tasks and dependencies in code with dynamic DAGs and templating." },
      { title: "Scheduling & retries", description: "Cron/scheduled runs, event triggers, retries, SLAs, and backfills." },
      { title: "Visual monitoring", description: "Web UI for DAG graphs, Gantt, logs, manual reruns, and task clearing." },
      { title: "Ecosystem & extensibility", description: "Large provider set with Kubernetes/Local/Celery executors for flexibility." },
    ],
    useCases: [
      "Batch ETL/ELT orchestration",
      "Data quality and dependency-aware scheduling",
      "ML training/deployment pipelines",
      "Self-hosted auditable scheduling platform",
    ],
    ctaVisit: "Visit Airflow",
    ctaBack: "Back to home",
  },
};

export function AirflowPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
