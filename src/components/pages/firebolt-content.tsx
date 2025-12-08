import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.firebolt.io/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "数据仓库 · Firebolt",
    title: "Firebolt：高性能云原生数仓",
    subtitle: "索引与存储优化的 MPP，主打低延迟查询",
    description:
      "Firebolt 是云原生 MPP 数据仓库，强调高性能与低延迟，提供索引与存储优化、向量化执行与弹性扩缩，适合交互式分析与高并发查询场景。",
    highlights: [
      { title: "高性能查询", description: "向量化执行与索引优化，低延迟响应。" },
      { title: "索引与存储", description: "多种索引策略与列式存储优化。" },
      { title: "弹性与治理", description: "按需扩缩容，细粒度资源与安全控制。" },
      { title: "兼容生态", description: "SQL 接口与常见 BI/ELT 工具集成。" },
    ],
    useCases: ["交互式分析", "高并发 BI", "低延迟 API/数据应用", "实时与近实时查询"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Data Warehouse · Firebolt",
    title: "Firebolt: high-performance cloud warehouse",
    subtitle: "Indexing and storage-optimized MPP for low-latency queries",
    description:
      "Firebolt is a cloud-native MPP warehouse focused on low-latency, high-performance queries with indexing and storage optimizations, vectorized execution, and elastic scaling—built for interactive analytics and high-concurrency workloads.",
    highlights: [
      { title: "Fast queries", description: "Vectorized execution and indexing for low latency." },
      { title: "Index & storage optimizations", description: "Multiple index types with optimized columnar storage." },
      { title: "Elastic & governed", description: "Scale as needed with fine-grained resource and security controls." },
      { title: "Ecosystem friendly", description: "SQL interface and integrations with common BI/ELT tools." },
    ],
    useCases: ["Interactive analytics", "High-concurrency BI", "Low-latency APIs/data apps", "Real-time/near-real-time queries"],
    ctaVisit: "Visit Firebolt",
    ctaBack: "Back to home",
  },
};

export function FireboltPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
