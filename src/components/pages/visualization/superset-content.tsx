import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://superset.apache.org/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "BI / 可视化 · Superset",
    title: "Apache Superset：开源现代 BI 与可视化",
    subtitle: "SQL Lab、仪表板、权限与插件生态，适合自托管与云原生部署",
    description:
      "Superset 是 Apache 基金会的开源 BI 平台，提供 SQL Lab、图表与仪表板构建、角色与数据集权限管理，以及丰富的可视化插件。可对接主流数据库/仓库，支持自托管与 Kubernetes 部署，也可与 dbt 等数据建模工具搭配使用。",
    highlights: [
      { title: "SQL Lab 与数据集", description: "支持 SQL 编辑、保存查询为数据集，便于复用与建模。" },
      { title: "丰富可视化", description: "内置多种图表与插件生态，支持交互筛选与下钻。" },
      { title: "权限与安全", description: "角色/数据集/行级权限控制，审计与认证集成。" },
      { title: "云原生部署", description: "开源可自托管，支持容器化和 K8s，易于水平扩展。" },
    ],
    useCases: ["开源自托管 BI", "运营/监控仪表板", "SQL 驱动的自助探索", "与 dbt 搭建指标层"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "BI / Visualization · Superset",
    title: "Apache Superset: open-source modern BI",
    subtitle: "SQL Lab, dashboards, permissions, and plugin ecosystem for self-hosted/cloud",
    description:
      "Superset is an Apache open-source BI platform with SQL Lab, chart and dashboard builders, role-based access, and a rich visualization/plugin ecosystem. It connects to major databases/warehouses, deploys easily on Kubernetes, and pairs well with dbt-style modeling.",
    highlights: [
      { title: "SQL Lab & datasets", description: "Query editor with saved queries as datasets for reuse and modeling." },
      { title: "Rich visuals", description: "Many built-in charts plus plugins, interactive filters, and drill-downs." },
      { title: "Permissions & security", description: "Role/dataset/row-level controls, auditing, and auth integrations." },
      { title: "Cloud-native deploy", description: "Self-hostable OSS with containers/K8s and horizontal scalability." },
    ],
    useCases: ["Open-source self-hosted BI", "Ops/monitoring dashboards", "SQL-driven self-service", "Metric layer with dbt"],
    ctaVisit: "Visit Superset",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "BI / 可視化 · Apache Superset",
    title: "Superset：オープンソース BI",
    subtitle: "SQL Lab、可視化プラグイン、ダッシュボード、権限管理を提供",
    description:
      "Superset は Apache のオープンソース BI で、SQL Lab、拡張可能な可視化プラグイン、ダッシュボード、権限管理を備え、自社ホストやクラウドネイティブ展開に適しています。",
    highlights: [
      { title: "SQL Lab", description: "SQL 作成とプレビュー、結果を可視化へ連携。" },
      { title: "拡張可視化", description: "プラグインでチャートを拡張し、カスタムも可能。" },
      { title: "ダッシュボード", description: "ドラッグでレイアウトし、フィルタや相互作用を設定。" },
      { title: "権限とガバナンス", description: "ロール/権限、データセット制御で安全に共有。" },
    ],
    useCases: ["自社ホスト BI", "クラウドネイティブ可視化", "SQL ドリブン分析", "拡張可能なダッシュボード"],
    ctaVisit: "公式サイトを見る",
    ctaBack: "ホームへ戻る",
  },
};

export function SupersetPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
