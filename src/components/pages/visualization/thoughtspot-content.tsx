import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.thoughtspot.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "BI / 可视化 · ThoughtSpot",
    title: "ThoughtSpot：搜索驱动的自助分析",
    subtitle: "搜索式分析 + AI 辅助推荐，适合业务用户快速提问与探索",
    description:
      "ThoughtSpot 提供搜索驱动的分析体验，用户用自然语言/搜索框提问即可生成图表与洞察，并可下钻、重排和组合成仪表板。支持 AI 推荐、关系建模、行级权限，以及嵌入式分析（ThoughtSpot Everywhere）。",
    highlights: [
      { title: "搜索式分析", description: "输入问题即生成图表，可继续下钻和调整。" },
      { title: "AI 推荐与洞察", description: "自动建议问题、图表与相关指标，辅助业务决策。" },
      { title: "嵌入式分析", description: "ThoughtSpot Everywhere 支持在产品内嵌入搜索与图表。" },
      { title: "安全与治理", description: "关系建模、行级/对象级权限与审计日志。" },
    ],
    useCases: ["业务自助问答", "实时运营洞察", "嵌入式自助分析", "高管/一线快速决策支持"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "BI / Visualization · ThoughtSpot",
    title: "ThoughtSpot: search-driven analytics",
    subtitle: "Search and AI-assisted insights for business users to ask and explore",
    description:
      "ThoughtSpot delivers search-based analytics where business users ask questions and get charts instantly, with drill-down, rearrange, and dashboarding. It offers AI suggestions, relational modeling, row-level security, and embedded analytics via ThoughtSpot Everywhere.",
    highlights: [
      { title: "Search analytics", description: "Type questions to generate charts, then drill and adjust quickly." },
      { title: "AI suggestions", description: "Recommends questions, charts, and related metrics for faster insight." },
      { title: "Embedded analytics", description: "ThoughtSpot Everywhere embeds search and visuals into your product." },
      { title: "Security & governance", description: "Modeling with row/object-level permissions and audit logging." },
    ],
    useCases: ["Business self-service Q&A", "Operational insights", "Embedded self-service", "Exec/field decision support"],
    ctaVisit: "Visit ThoughtSpot",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "BI / 可視化 · ThoughtSpot",
    title: "ThoughtSpot：検索ドリブン分析",
    subtitle: "検索と AI サジェスト、埋め込み、きめ細かなセキュリティ",
    description:
      "ThoughtSpot はビジネスユーザー向けの検索ドリブン分析を提供し、AI サジェスト、埋め込み、行粒度のセキュリティを備えています。",
    highlights: [
      { title: "検索ベースの体験", description: "自然言語に近い検索で指標や可視化を即座に生成。" },
      { title: "AI サジェスト", description: "関連する質問やチャートを提案し、探索を支援。" },
      { title: "埋め込み", description: "アプリやポータルに分析を組み込める." },
      { title: "セキュリティ", description: "細粒度の権限と監査でエンタープライズ要求に対応。" },
    ],
    useCases: ["ビジネスユーザーのセルフサービス分析", "検索主導のダッシュボード", "埋め込み分析", "ガバナンスが必要な組織向け"],
    ctaVisit: "公式サイトを見る",
    ctaBack: "ホームへ戻る",
  },
};

export function ThoughtSpotPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
