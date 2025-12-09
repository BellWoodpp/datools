import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.h2o.ai/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "ML / AutoML · H2O.ai",
    title: "H2O.ai：开源 + Driverless AI 自动建模",
    subtitle: "H2O-3/AutoML、Driverless AI、时间序列与 MLOps",
    description:
      "H2O.ai 提供开源 H2O-3 与商业版 Driverless AI，覆盖自动特征工程、模型搜索、可解释性与部署；配合 Wave、Feature Store 和 MLOps 组件，可自托管或云端使用，适合对隐私与性能有要求的团队。",
    highlights: [
      { title: "AutoML 与 Driverless", description: "自动特征工程、模型调优与时间序列支持，生成可复用 pipeline。" },
      { title: "开源/自托管", description: "H2O-3、H2O AutoML 支持 GPU，本地部署易控数据合规。" },
      { title: "可解释性", description: "提供 SHAP/LIME、条件贡献与模型文档，便于审计与沟通。" },
      { title: "MLOps 与特征", description: "模型注册、部署与监控，特征存储和流水线管理简化上线。" },
    ],
    useCases: [
      "数据科学团队提效与民主化",
      "时间序列预测与优化",
      "金融风控/信用评分等高合规场景",
      "自托管的 AutoML 与开源栈",
    ],
    ctaVisit: "访问 H2O.ai",
    ctaBack: "返回首页",
  },
  en: {
    badge: "ML / AutoML · H2O.ai",
    title: "H2O.ai: open-source + Driverless AI AutoML",
    subtitle: "H2O-3/AutoML, Driverless AI, time series, and MLOps",
    description:
      "H2O.ai offers the open-source H2O-3 stack and commercial Driverless AI with automated feature engineering, model search, explainability, and deployment. With Wave apps, Feature Store, and MLOps components, it fits self-hosted or cloud setups that need privacy and performance control.",
    highlights: [
      { title: "AutoML & Driverless", description: "Automated feature engineering, tuning, and time-series support with reusable pipelines." },
      { title: "Open-source/self-hosted", description: "H2O-3 and H2O AutoML with GPU support for on-prem or cloud, keeping data in place." },
      { title: "Explainability", description: "SHAP/LIME, conditional contributions, and model documentation to aid auditability." },
      { title: "MLOps & features", description: "Model registry, deployment, monitoring, and feature management streamline productionization." },
    ],
    useCases: [
      "Upskilling data science teams with AutoML",
      "Time-series forecasting and optimization",
      "Financial risk/credit scoring with governance needs",
      "Self-hosted AutoML with open-source stack",
    ],
    ctaVisit: "Visit H2O.ai",
    ctaBack: "Back to home",
  },
};

export function H2OAIPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
