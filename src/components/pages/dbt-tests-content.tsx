import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://docs.getdbt.com/docs/build/tests";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "数据治理 · dbt tests",
    title: "dbt tests：模型级数据质量",
    subtitle: "内置与自定义断言，集成文档与 CI",
    description:
      "dbt tests 提供模型级数据质量校验，支持内置唯一性/非空/关系等测试与自定义断言，可在编译/CI 中执行并生成文档，适合 dbt 管理的数仓项目。",
    highlights: [
      { title: "内置测试", description: "唯一、非空、关系等常用质量规则开箱即用。" },
      { title: "自定义断言", description: "可编写 SQL/宏扩展自定义质量校验。" },
      { title: "CI 集成", description: "在 CI/CD 与调度中自动执行，阻断不合格模型。" },
      { title: "文档结合", description: "测试结果与 dbt docs 结合，透明化质量状态。" },
    ],
    useCases: ["模型级质量守护", "入仓前校验", "CI/CD 质量门禁", "文档与质量联动"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Data Governance · dbt tests",
    title: "dbt tests: model-level data quality",
    subtitle: "Built-in and custom assertions with docs and CI integration",
    description:
      "dbt tests add model-level quality checks with built-in uniqueness/not-null/relationships and custom assertions, running in CI and generating docs for dbt-managed warehouses.",
    highlights: [
      { title: "Built-in checks", description: "Uniqueness, not-null, relationships, and more out of the box." },
      { title: "Custom assertions", description: "Extend via SQL/macros for bespoke quality rules." },
      { title: "CI integration", description: "Run in CI/CD and schedulers to block bad models." },
      { title: "Docs linkage", description: "Surface results in dbt docs for quality transparency." },
    ],
    useCases: ["Model-level quality gates", "Pre-warehouse validation", "CI/CD quality enforcement", "Docs + quality visibility"],
    ctaVisit: "Visit dbt tests",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "データ品質 / ガバナンス · dbt tests",
    title: "dbt tests：モデルレベルの品質検証",
    subtitle: "組み込み/カスタムテストでデータ品質をチェックし、ドキュメントと CI に統合",
    description:
      "dbt tests は組み込み/カスタムテストでモデルレベルのデータ品質を検証し、ドキュメント生成や CI 統合を支援します。",
    highlights: [
      { title: "組み込みテスト", description: "一意性・非 null などの基本チェックを簡単に追加。" },
      { title: "カスタムテスト", description: "要件に応じて独自のチェックを定義可能。" },
      { title: "ドキュメント化", description: "スキーマとテストを合わせて記述し、共有できる。" },
      { title: "CI 統合", description: "パイプラインに組み込んで自動検証。" },
    ],
    useCases: ["モデル品質の確保", "ドキュメント生成", "CI/CD での自動チェック", "dbt プロジェクトの品質ガードレール"],
    ctaVisit: "公式サイトを見る",
    ctaBack: "ホームへ戻る",
  },
};

export function DbtTestsPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
