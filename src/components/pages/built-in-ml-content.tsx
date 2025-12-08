import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://cloud.google.com/bigquery-ml";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "内置 ML · Power BI / BigQuery",
    title: "内置 ML（Power BI / BigQuery）：就地训练与预测",
    subtitle: "Power BI 数据流 AutoML 与 BigQuery ML 的 SQL/低代码建模",
    description:
      "Power BI 的数据流 AutoML 与 BigQuery ML 让分析师在熟悉的 BI/SQL 环境就地训练模型，无需移动数据。支持回归、分类、聚类、时间序列等任务，预测结果可直接回写到报表或下游表中。",
    highlights: [
      { title: "就地训练", description: "在数据流或仓库内计算，无需导出数据，降低合规与运维成本。" },
      { title: "SQL/低代码", description: "BigQuery ML 通过 SQL 语句建模；Power BI 提供向导式 AutoML 模板。" },
      { title: "报表内使用", description: "预测结果可写回数据集/表，在 BI 报表中直接引用并定时刷新。" },
      { title: "现有治理", description: "沿用 Power BI/BigQuery 的权限、加密与成本/配额控制，方便治理。" },
    ],
    useCases: [
      "需求/销量预测与库存优化",
      "流失/转化/倾向评分",
      "在 BI 报表中快速验证模型想法",
      "让分析师在仓库/BI 内完成端到端 ML",
    ],
    ctaVisit: "查看 BigQuery ML",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Built-in ML · Power BI / BigQuery",
    title: "Built-in ML (Power BI / BigQuery): in-place training",
    subtitle: "Power BI dataflows AutoML and BigQuery ML with SQL/low-code modeling",
    description:
      "Power BI dataflows AutoML and BigQuery ML let analysts train models where the data lives, using SQL or guided templates without exporting data. They cover regression, classification, clustering, and time series with predictions written back to reports or tables.",
    highlights: [
      { title: "In-place training", description: "Run models inside dataflows or the warehouse to avoid data movement and simplify compliance." },
      { title: "SQL/low-code", description: "BigQuery ML uses SQL statements; Power BI offers wizard-driven AutoML templates." },
      { title: "Report-ready outputs", description: "Write predictions back to datasets/tables and reference them directly in BI with scheduled refreshes." },
      { title: "Reuse governance", description: "Leverage existing Power BI/BigQuery permissions, encryption, and cost/quotas for managed rollout." },
    ],
    useCases: [
      "Demand/sales forecasting and inventory planning",
      "Churn/conversion/propensity scoring",
      "Fast model proofs inside BI reports",
      "Empowering analysts to finish ML inside the warehouse/BI",
    ],
    ctaVisit: "View BigQuery ML",
    ctaBack: "Back to home",
  },
};

export function BuiltInMlPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
