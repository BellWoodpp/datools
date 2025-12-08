import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://greatexpectations.io/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "数据治理 · Great Expectations",
    title: "Great Expectations：开源数据质量框架",
    subtitle: "基于 Expectation 的校验、文档与管道集成",
    description:
      "Great Expectations 是开源数据质量框架，用 Expectation 定义校验规则，生成数据文档，并可集成到 ETL/ELT/编排管道，适合自托管与云端使用。",
    highlights: [
      { title: "Expectation 规则", description: "丰富预置与自定义校验，覆盖模式、范围、唯一性等。" },
      { title: "数据文档", description: "自动生成数据概况与验证报告，便于沟通。" },
      { title: "管道集成", description: "与 Airflow/dbt/Prefect 等编排工具集成。" },
      { title: "开源与云", description: "开源自托管，亦有云服务选项。" },
    ],
    useCases: ["批处理质量校验", "入仓前检查", "数据文档化", "管道中的质量门控"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Data Governance · Great Expectations",
    title: "Great Expectations: open-source data quality",
    subtitle: "Expectation-based validation, docs, and pipeline integration",
    description:
      "Great Expectations is an open-source data quality framework using Expectations to validate data, generate docs, and integrate with ETL/ELT/orchestration pipelines for self-hosted or cloud use.",
    highlights: [
      { title: "Expectation rules", description: "Rich built-in/custom checks for schema, ranges, uniqueness, etc." },
      { title: "Data docs", description: "Auto-generated profiling and validation reports." },
      { title: "Pipeline integration", description: "Works with Airflow/dbt/Prefect and other orchestrators." },
      { title: "OSS + cloud", description: "Self-hosted OSS with optional managed cloud." },
    ],
    useCases: ["Batch quality gates", "Pre-warehouse checks", "Data documentation", "Quality enforcement in pipelines"],
    ctaVisit: "Visit Great Expectations",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "データ品質 / ガバナンス · Great Expectations",
    title: "Great Expectations：オープンソースのデータ品質",
    subtitle: "Expectation ベースの検証、ドキュメント化、パイプライン連携",
    description:
      "Great Expectations はオープンソースのデータ品質フレームワークで、Expectation に基づく検証、ドキュメント生成、パイプラインへの組み込みを提供します。",
    highlights: [
      { title: "Expectation で検証", description: "宣言的な Expectation で品質チェックを管理。" },
      { title: "ドキュメント生成", description: "検証結果をドキュメント化して共有。" },
      { title: "パイプライン統合", description: "ETL/ELT と組み合わせて CI/CD に組み込み可能。" },
      { title: "オープンソース", description: "自社ホストやクラウドで柔軟に利用可能。" },
    ],
    useCases: ["データ品質検証", "ドキュメント化と共有", "パイプラインへの組み込み", "オープンソースによる拡張"],
    ctaVisit: "公式サイトを見る",
    ctaBack: "ホームへ戻る",
  },
};

export function GreatExpectationsPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
