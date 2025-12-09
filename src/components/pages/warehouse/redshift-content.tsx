import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://aws.amazon.com/redshift/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "数据仓库 · Redshift",
    title: "Amazon Redshift：云数据仓库",
    subtitle: "RA3 存算分离、Spectrum 联邦查询，兼容 PostgreSQL",
    description:
      "Redshift 是 AWS 的云数据仓库，RA3 支持存算分离，Spectrum 可查询 S3 外部数据，兼容 PostgreSQL 语法。适合与 AWS 生态（Glue、Lambda、S3、QuickSight）紧密集成的数仓与 BI 场景。",
    highlights: [
      { title: "RA3 与存算分离", description: "灵活扩缩容与缓存，提升性能与成本效率。" },
      { title: "Spectrum 联邦", description: "直接查询 S3 外部表，减少数据搬运。" },
      { title: "AWS 集成", description: "与 Glue、S3、Lake Formation、QuickSight 无缝衔接。" },
      { title: "兼容 PostgreSQL", description: "SQL 语法亲和，便于迁移和使用工具链。" },
    ],
    useCases: ["AWS 生态数仓", "S3 数据湖联邦查询", "BI 报表与仪表板", "近实时分析"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Data Warehouse · Redshift",
    title: "Amazon Redshift: cloud warehouse",
    subtitle: "RA3 storage/compute separation, Spectrum federation, PostgreSQL-compatible",
    description:
      "Redshift is AWS's warehouse with RA3 storage/compute separation, Spectrum for querying S3 data, and PostgreSQL compatibility—ideal for AWS-integrated warehousing and BI with Glue/S3/QuickSight.",
    highlights: [
      { title: "RA3 & separation", description: "Flexible scaling and caching for performance/cost balance." },
      { title: "Spectrum federation", description: "Query external S3 data without heavy movement." },
      { title: "AWS integrations", description: "Tight with Glue, S3/Lake Formation, QuickSight, Lambda." },
      { title: "PostgreSQL-friendly", description: "Familiar SQL and toolchain compatibility." },
    ],
    useCases: ["AWS-native warehousing", "S3 lake federation", "BI dashboards/reports", "Near-real-time analytics"],
    ctaVisit: "Visit Redshift",
    ctaBack: "Back to home",
  },
};

export function RedshiftPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
