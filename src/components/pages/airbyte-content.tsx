import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://airbyte.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "ELT / 集成 · Airbyte",
    title: "Airbyte：开源 ELT 连接器平台",
    subtitle: "社区驱动连接器、增量同步，自托管与云端均可",
    description:
      "Airbyte 是开源 ELT 平台，拥有大量社区连接器，支持自定义与增量同步，可自托管或使用云版本。适合需要灵活控制与成本可见的数据工程团队。",
    highlights: [
      { title: "开源连接器", description: "社区/官方连接器丰富，可自定义开发。" },
      { title: "增量与大规模", description: "支持 CDC/增量，适配大规模同步任务。" },
      { title: "自托管与云", description: "可在本地/K8s 部署，也有托管云版。" },
      { title: "观测与重试", description: "管道监控、重试与告警，提升稳定性。" },
    ],
    useCases: ["成本可控的 ELT", "私有化/自托管需求", "快速补齐长尾连接器", "数据工程团队自定义管道"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "ELT / Integration · Airbyte",
    title: "Airbyte: open-source ELT connectors",
    subtitle: "Community-driven connectors, incremental sync, self-hosted or cloud",
    description:
      "Airbyte is an open-source ELT platform with a large connector ecosystem, custom builds, incremental/CDC sync, and both self-hosted and cloud options—ideal for data teams needing flexibility and cost control.",
    highlights: [
      { title: "Open-source connectors", description: "Rich community/official connectors plus custom builds." },
      { title: "Incremental & scale", description: "Supports CDC/incremental for large sync jobs." },
      { title: "Self-host or cloud", description: "Deploy on-prem/K8s or use the managed cloud." },
      { title: "Observability & retries", description: "Pipeline monitoring, retries, and alerts for reliability." },
    ],
    useCases: ["Cost-conscious ELT", "Self-hosting requirements", "Long-tail connectors", "Data teams customizing pipelines"],
    ctaVisit: "Visit Airbyte",
    ctaBack: "Back to home",
  },
};

export function AirbytePageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
