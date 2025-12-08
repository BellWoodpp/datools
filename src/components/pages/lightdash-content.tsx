import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.lightdash.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "BI / 可视化 · Lightdash",
    title: "Lightdash：面向 dbt 的开源 BI",
    subtitle: "直接读取 dbt 模型，提供 Looker 风格探索与权限",
    description:
      "Lightdash 是面向 dbt 的开源 BI 工具，读取 dbt 元数据生成语义层与探索界面，支持仪表板、分享、行级权限与嵌入。可自托管或使用云服务，适合希望基于 dbt 模型快速提供可视化的团队。",
    highlights: [
      { title: "dbt 原生", description: "直接使用 dbt 模型与指标，减少重复建模。" },
      { title: "探索与仪表板", description: "Looker 风格 Explore，支持下钻、过滤与可视化组合。" },
      { title: "权限与嵌入", description: "行级安全、角色控制与嵌入式分享。" },
      { title: "开源可自托管", description: "开源版本可自托管，也提供云托管。" },
    ],
    useCases: ["dbt 团队快速上层可视化", "自助探索与仪表板", "嵌入式报表", "开源/自托管 BI 方案"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "BI / Visualization · Lightdash",
    title: "Lightdash: open-source BI for dbt",
    subtitle: "Reads dbt models to deliver Looker-style explores and dashboards",
    description:
      "Lightdash is an open-source BI tool built for dbt, using dbt metadata to create a semantic layer and explore UI. It offers dashboards, sharing, row-level security, and embeds, with both self-hosted and cloud options for teams that want visualization on top of dbt.",
    highlights: [
      { title: "dbt-native", description: "Leverages dbt models/metrics directly, avoiding duplicate modeling." },
      { title: "Explores & dashboards", description: "Looker-like explores with drill/filters and chart composition." },
      { title: "Permissions & embeds", description: "Row-level security, roles, and embedded sharing." },
      { title: "Open-source/self-hosted", description: "OSS you can host yourself, plus a hosted cloud offering." },
    ],
    useCases: ["dbt teams needing viz", "Self-service explores and dashboards", "Embedded reporting", "Open-source/self-hosted BI"],
    ctaVisit: "Visit Lightdash",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "BI / 可視化 · Lightdash",
    title: "Lightdash：dbt 向けオープンソース BI",
    subtitle: "dbt モデルから Looker 風 Explore とダッシュボードを生成",
    description:
      "Lightdash は dbt 向けのオープンソース BI で、Looker スタイルの Explore やダッシュボードを dbt モデルから生成し、自社ホストまたはクラウドで利用できます。",
    highlights: [
      { title: "dbt ネイティブ", description: "dbt モデルを直接活用し、指標/ディメンションを再利用。" },
      { title: "Looker 風 Explore", description: "探索画面でセルフサービス分析を提供。" },
      { title: "オープンソース/クラウド", description: "自社ホストもクラウドも選択できる。" },
      { title: "コラボレーション", description: "共有やガバナンスを備え、チームで利用可能。" },
    ],
    useCases: ["dbt を活用した BI", "セルフサービス探索", "自社ホスト BI", "クラウドでの軽量レポート"],
    ctaVisit: "公式サイトを見る",
    ctaBack: "ホームへ戻る",
  },
};

export function LightdashPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
