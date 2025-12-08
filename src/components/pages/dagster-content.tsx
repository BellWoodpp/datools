import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://dagster.io/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "开源 · Dagster",
    title: "Dagster：数据资产与管道编排",
    subtitle: "软件定义资产（SDA）、类型检查、可观测与混合执行",
    description:
      "Dagster 是面向数据团队的开源编排器，以软件定义资产管理数据依赖，提供类型/模式检查、资源/IO 管理、物化与可观测性。支持本地与云（Dagster Cloud）运行，适合现代数据平台的可维护管道。",
    highlights: [
      { title: "软件定义资产", description: "用资产描述上游依赖与物化逻辑，天然支持数据血缘。" },
      { title: "类型与验证", description: "内置类型/模式检查、传递资产元数据，降低运行时风险。" },
      { title: "可观测与重试", description: "日志、事件、告警、重试与回填，UI 展示资产/任务拓扑。" },
      { title: "灵活执行", description: "本地、K8s、混合执行与分布式资源管理，易与 dbt/仓库集成。" },
    ],
    useCases: [
      "以资产为中心的 ELT/ML 管道",
      "数据血缘与质量守护",
      "需要类型安全与可观测性的编排",
      "混合部署与团队协作",
    ],
    ctaVisit: "访问 Dagster",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Open source · Dagster",
    title: "Dagster: data asset-centric orchestrator",
    subtitle: "Software-defined assets, typing/validation, observability, and hybrid execution",
    description:
      "Dagster is an open-source orchestrator for data teams built around software-defined assets (SDA). It provides typing/schema checks, resource/IO management, materializations, and observability with local or cloud (Dagster Cloud) execution for maintainable pipelines.",
    highlights: [
      { title: "Software-defined assets", description: "Declare assets with upstream dependencies and materialization logic for lineage." },
      { title: "Typing & validation", description: "Built-in type/schema checks and metadata propagation reduce runtime issues." },
      { title: "Observability & retries", description: "Logging, events, alerts, retries, and backfills with UI for asset/topology views." },
      { title: "Flexible execution", description: "Run locally or on K8s/hybrid with resources; integrates well with dbt/warehouses." },
    ],
    useCases: [
      "Asset-centric ELT/ML pipelines",
      "Data lineage and quality guardrails",
      "Typed, observable orchestration",
      "Hybrid deployment and team collaboration",
    ],
    ctaVisit: "Visit Dagster",
    ctaBack: "Back to home",
  },
};

export function DagsterPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
