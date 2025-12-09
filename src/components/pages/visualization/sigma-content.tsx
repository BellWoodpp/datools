import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.sigmacomputing.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "BI / 可视化 · Sigma",
    title: "Sigma：类 Excel 的云端 BI（直接仓库计算）",
    subtitle: "表格体验 + 云仓计算，适合业务自助探索与实时指标",
    description:
      "Sigma Computing 将熟悉的表格界面与云数据仓库计算结合，用户像在 Excel 中一样拖拽、公式、透视，但计算在仓库完成并受权限控制。支持实时数据、仪表板、版本与协作，适合业务团队自助分析。",
    highlights: [
      { title: "类 Excel 体验", description: "表格/透视/公式操作，降低业务用户上手成本。" },
      { title: "仓库直算", description: "计算在数据仓库执行，保证性能与安全；支持 RLS/权限。" },
      { title: "实时仪表板", description: "实时查询、缓存控制、参数化与下钻交互。" },
      { title: "协作与治理", description: "版本、权限、审计与共享，便于团队协作。" },
    ],
    useCases: ["业务自助分析", "财务/运营实时指标", "替代复杂 Excel 报表", "仓库直连的可视化探索"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "BI / Visualization · Sigma",
    title: "Sigma: spreadsheet-like cloud BI on the warehouse",
    subtitle: "Familiar spreadsheet UX with live warehouse compute for business users",
    description:
      "Sigma Computing offers a spreadsheet and pivot-style interface backed by your cloud data warehouse. Users drag, formula, and drill with calculations executed in-warehouse under governance. Real-time dashboards, sharing, and auditing enable self-service for business teams.",
    highlights: [
      { title: "Spreadsheet UX", description: "Excel-like tables, pivots, and formulas for fast adoption." },
      { title: "Warehouse compute", description: "Queries run in the warehouse with security and row-level controls." },
      { title: "Live dashboards", description: "Real-time queries, caching controls, parameters, and drill paths." },
      { title: "Collaboration & governance", description: "Sharing, permissions, versions, and auditing built-in." },
    ],
    useCases: ["Business self-service analytics", "Finance/ops live metrics", "Excel report replacement", "Warehouse-native exploration"],
    ctaVisit: "Visit Sigma",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "BI / 可視化 · Sigma",
    title: "Sigma：倉庫直結のクラウド BI（スプレッドシート感覚）",
    subtitle: "表計算 UX + 倉庫計算でビジネスユーザーのセルフサービスを実現",
    description:
      "Sigma Computing は倉庫計算を背後に持つスプレッドシート/ピボット型のインターフェースを提供し、ユーザーは Excel 感覚でドラッグや数式、ドリルを行えます。計算は倉庫で実行され、権限とガバナンスを維持。リアルタイムダッシュボードや共有、監査が可能です。",
    highlights: [
      { title: "スプレッドシート UX", description: "Excel に近いテーブル、ピボット、数式で早く馴染める。" },
      { title: "倉庫コンピュート", description: "クエリは倉庫で実行され、セキュリティや RLS を維持。" },
      { title: "ライブダッシュボード", description: "リアルタイムクエリ、キャッシュ制御、パラメータやドリルをサポート。" },
      { title: "コラボ/ガバナンス", description: "共有、権限、バージョン、監査を備え、チームで利用可能。" },
    ],
    useCases: ["ビジネスのセルフサービス分析", "財務/オペレーションのライブ指標", "複雑な Excel レポートの代替", "倉庫ネイティブの探索"],
    ctaVisit: "公式サイトを見る",
    ctaBack: "ホームへ戻る",
  },
};

export function SigmaPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
