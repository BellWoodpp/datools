import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.datarobot.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "ML / AutoML · DataRobot",
    title: "DataRobot：企业级 AutoML 与 MLOps",
    subtitle: "自动特征工程、模型搜索、部署监控与治理",
    description:
      "DataRobot 提供端到端的企业级 AutoML 与 MLOps 平台，支持代码/无代码建模、时间序列与 NLP，内置特征工程、模型比较、可解释性与监控告警，可在多云或本地部署以满足合规与安全要求。",
    highlights: [
      { title: "AutoML 流水线", description: "自动特征工程、模型搜索与排行榜，蓝图可复用并可下钻调整。" },
      { title: "部署与监控", description: "一键部署、漂移/偏差监控，支持 champion/challenger 与 Shadow 测试。" },
      { title: "可解释性与治理", description: "SHAP、PDP 与合规报告，审批流与访问控制支持审计与风险管理。" },
      { title: "灵活集成", description: "API/SDK、Notebooks 集成，多云/本地混合部署适配企业环境。" },
    ],
    useCases: [
      "企业级 AutoML 与模型工厂",
      "风控、营销与欺诈建模",
      "时间序列预测与需求规划",
      "生产模型的持续监控与治理",
    ],
    ctaVisit: "访问 DataRobot",
    ctaBack: "返回首页",
  },
  en: {
    badge: "ML / AutoML · DataRobot",
    title: "DataRobot: enterprise AutoML & MLOps",
    subtitle: "Automated feature engineering, model search, deploy/monitor with governance",
    description:
      "DataRobot delivers an end-to-end AutoML and MLOps platform with no-code/code workflows, time series and NLP support, built-in feature engineering, explainability, and production monitoring across cloud or on-prem deployments.",
    highlights: [
      { title: "AutoML pipelines", description: "Automated feature engineering, model search, leaderboards, and reusable blueprints you can edit." },
      { title: "Deploy & monitor", description: "One-click deployment with drift/bias monitoring plus champion/challenger and shadow testing." },
      { title: "Explainability & governance", description: "SHAP, PDP, compliance-ready reports, approvals, and access controls for regulated teams." },
      { title: "Flexible integrations", description: "APIs/SDKs and notebooks with multi-cloud or on-prem support to fit enterprise environments." },
    ],
    useCases: [
      "Enterprise AutoML and model factory",
      "Risk, marketing, and fraud modeling",
      "Time-series forecasting and demand planning",
      "Production model monitoring and governance",
    ],
    ctaVisit: "Visit DataRobot",
    ctaBack: "Back to home",
  },
};

export function DataRobotPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
