import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.castordoc.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "数据治理 · Castor",
    title: "Castor：数据目录与发现",
    subtitle: "血缘、文档、资产打分与协作，提升数据可发现性",
    description:
      "Castor 是数据目录与治理工具，提供资产搜索、血缘、文档与资产健康评分，支持协作与权限，帮助团队快速找到可信数据并推进治理。",
    highlights: [
      { title: "搜索与目录", description: "统一搜索数据资产，提升可发现性。" },
      { title: "血缘与文档", description: "自动生成血缘与文档，理解上下游关系。" },
      { title: "资产评分", description: "基于使用/质量的健康度评分，优先治理。" },
      { title: "协作与权限", description: "注释、拥有者与权限控制，促进协同。" },
    ],
    useCases: ["数据发现与自助", "数据治理与优先级", "数据资产文档化", "权限与责任归属"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Data Governance · Castor",
    title: "Castor: data catalog and discovery",
    subtitle: "Lineage, docs, asset scoring, and collaboration for trusted data",
    description:
      "Castor provides a data catalog with search, lineage, documentation, and asset health scoring, plus collaboration and permissions to help teams find and trust data faster.",
    highlights: [
      { title: "Search & catalog", description: "Unified discovery across data assets." },
      { title: "Lineage & docs", description: "Auto lineage and documentation for context." },
      { title: "Asset scoring", description: "Health scores based on usage/quality for prioritization." },
      { title: "Collaboration & access", description: "Ownership, comments, and permissions for governance." },
    ],
    useCases: ["Data discovery/self-service", "Governance prioritization", "Asset documentation", "Access and ownership clarity"],
    ctaVisit: "Visit Castor",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "データカタログ / ガバナンス · Castor",
    title: "Castor：データカタログと発見",
    subtitle: "血統、ドキュメント、スコアリング、ガバナンス協働を提供",
    description:
      "Castor はデータカタログ/ディスカバリーツールで、血統、ドキュメント、アセットのスコアリング、ガバナンス協働を提供します。",
    highlights: [
      { title: "血統とドキュメント", description: "データの血統と説明を管理・共有。" },
      { title: "アセットスコアリング", description: "品質や利用状況をスコアで可視化。" },
      { title: "ガバナンス協働", description: "権限やコメントでチームの連携を支援。" },
      { title: "検索と発見", description: "メタデータ検索で必要なデータを素早く見つける。" },
    ],
    useCases: ["データ発見とカタログ化", "血統と品質可視化", "チームでのガバナンス", "データ資産のスコアリングと共有"],
    ctaVisit: "公式サイトを見る",
    ctaBack: "ホームへ戻る",
  },
};

export function CastorPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
