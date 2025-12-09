import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.databricks.com/product/machine-learning/automl";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "AutoML · Databricks",
    title: "Databricks AutoML：Lakehouse 自动建模",
    subtitle: "自动生成 Notebook、特征工程、MLflow 追踪与部署",
    description:
      "Databricks AutoML 在 Lakehouse 上自动生成基线模型与特征工程 Notebook，覆盖分类、回归与时间序列。集成 Delta/Unity Catalog、Feature Store、MLflow 实验追踪与 Serving，便于团队快速迭代并生产化。",
    highlights: [
      { title: "可编辑 Notebook", description: "生成基线模型与特征处理的 Notebook，便于数据科学家继续迭代。" },
      { title: "Lakehouse 集成", description: "Delta 表与 Unity Catalog 治理，Feature Store 复用特征，兼容 SQL/笔记本。" },
      { title: "MLflow MLOps", description: "实验追踪、模型注册表、端点部署与批量推理一体化。" },
      { title: "多任务支持", description: "分类/回归/时间序列 AutoML，自动搜索超参与最佳模型。" },
    ],
    useCases: [
      "快速生成可解释的基线 Notebook",
      "Lakehouse 上的 AutoML 与 MLOps",
      "需求预测、定价与评分模型",
      "让业务/分析团队在 Databricks 上自助建模",
    ],
    ctaVisit: "访问 Databricks AutoML",
    ctaBack: "返回首页",
  },
  en: {
    badge: "AutoML · Databricks",
    title: "Databricks AutoML: Lakehouse automation",
    subtitle: "Auto-generated notebooks, feature engineering, MLflow tracking, and deployment",
    description:
      "Databricks AutoML creates baseline models and feature-engineering notebooks on the Lakehouse for classification, regression, and time series. It integrates Delta/Unity Catalog, Feature Store, MLflow tracking, and serving so teams can iterate quickly and ship to production.",
    highlights: [
      { title: "Editable notebooks", description: "Generates notebooks for baseline models and feature prep that data scientists can extend." },
      { title: "Lakehouse integration", description: "Works with Delta tables and Unity Catalog governance, with Feature Store for reusable features." },
      { title: "MLflow MLOps", description: "Built-in experiment tracking, model registry, serving endpoints, and batch inference." },
      { title: "Task coverage", description: "AutoML for classification, regression, and time series with automatic hyperparameter search." },
    ],
    useCases: [
      "Quickly producing explainable baseline notebooks",
      "AutoML + MLOps on the Lakehouse",
      "Forecasting, pricing, and scoring models",
      "Empowering analysts/citizen data scientists on Databricks",
    ],
    ctaVisit: "Visit Databricks AutoML",
    ctaBack: "Back to home",
  },
};

export function DatabricksAutoMLPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
