import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.snowflake.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "数据仓库 · Snowflake",
    title: "Snowflake：云原生数据仓库",
    subtitle: "存算分离、多云部署、自动弹性与安全治理",
    description:
      "Snowflake 是云原生数据仓库，采用存算分离与多集群弹性，支持多云部署、数据共享与市场生态，内置安全与治理。适合分析、BI、共享数据产品与多租户场景。",
    highlights: [
      { title: "存算分离与弹性", description: "多集群自动扩缩容，按需计费。" },
      { title: "多云与共享", description: "覆盖多云区域，安全的数据共享与市场生态。" },
      { title: "治理与安全", description: "行/列级访问、加密、合规审计。" },
      { title: "广泛生态", description: "支持外部表、流批、连接多种 ELT/BI/AI 工具。" },
    ],
    useCases: ["BI 与自助分析", "数据共享与数据产品", "多租户与隔离计算", "跨云部署与灾备"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Data Warehouse · Snowflake",
    title: "Snowflake: cloud-native warehouse",
    subtitle: "Storage/compute separation, multi-cloud, elastic scaling, and governance",
    description:
      "Snowflake is a cloud-native warehouse with separated storage/compute, elastic multi-cluster scaling, multi-cloud support, secure data sharing, and governance—built for analytics, BI, data products, and multi-tenant workloads.",
    highlights: [
      { title: "Separation & elasticity", description: "Multi-cluster auto scaling with pay-as-you-go." },
      { title: "Multi-cloud & sharing", description: "Runs across clouds with secure sharing and marketplace." },
      { title: "Security & governance", description: "Row/column controls, encryption, auditing/compliance." },
      { title: "Ecosystem ready", description: "External tables, stream/batch, and integrations with ELT/BI/AI." },
    ],
    useCases: ["BI and self-service", "Data sharing/products", "Multi-tenant isolation", "Cross-cloud and DR"],
    ctaVisit: "Visit Snowflake",
    ctaBack: "Back to home",
  },
};

export function SnowflakePageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
