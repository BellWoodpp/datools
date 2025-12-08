import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.montecarlodata.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "数据治理 · Monte Carlo",
    title: "Monte Carlo：数据可观测性",
    subtitle: "数据质量监控、血缘、SLA 与影响分析",
    description:
      "Monte Carlo 聚焦数据可观测性，自动监控数据质量、血缘与管道健康，提供异常告警、SLA 管理与影响分析，帮助快速定位问题并降低数据事故影响。",
    highlights: [
      { title: "异常检测与告警", description: "自动检测模式/量级/延迟异常，及时提醒。" },
      { title: "血缘与影响分析", description: "从源到消费的血缘，评估下游影响范围。" },
      { title: "SLA 与健康度", description: "监控数据新鲜度、可用性与 SLA 违约。" },
      { title: "集成生态", description: "支持主流仓库、编排、BI 与数据工具。" },
    ],
    useCases: ["数据质量监控", "管道事故排查", "SLA 守护与报告", "影响分析与回滚决策"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Data Governance · Monte Carlo",
    title: "Monte Carlo: data observability",
    subtitle: "Data quality monitoring, lineage, SLAs, and impact analysis",
    description:
      "Monte Carlo provides data observability with anomaly detection, lineage, SLA health, and impact analysis to catch issues fast and reduce incident blast radius.",
    highlights: [
      { title: "Anomaly detection & alerts", description: "Schema/volume/freshness anomalies with notifications." },
      { title: "Lineage & impact", description: "End-to-end lineage to assess downstream impact." },
      { title: "SLA & health", description: "Freshness/availability tracking and SLA breach visibility." },
      { title: "Ecosystem integrations", description: "Connects to major warehouses, orchestration, and BI tools." },
    ],
    useCases: ["Data quality monitoring", "Pipeline incident triage", "SLA protection/reporting", "Impact assessment and rollback"],
    ctaVisit: "Visit Monte Carlo",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "データ品質 / ガバナンス · Monte Carlo",
    title: "Monte Carlo：データオブザーバビリティ",
    subtitle: "データ品質、血統、SLA と影響アラートでパイプラインを監視",
    description:
      "Monte Carlo はデータオブザーバビリティを提供し、品質チェック、血統、SLA、影響アラートでデータパイプラインを監視します。",
    highlights: [
      { title: "品質監視", description: "メトリクスとチェックで異常を検知。" },
      { title: "データ血統", description: "上流・下流の影響を可視化し、影響範囲を把握。" },
      { title: "SLA/アラート", description: "SLA を設定し、逸脱時に通知。" },
      { title: "パイプライン統合", description: "既存のツールと連携し、監査可能。" },
    ],
    useCases: ["データ品質と稼働監視", "影響分析", "SLA 準拠", "異常検知による信頼性向上"],
    ctaVisit: "公式サイトを見る",
    ctaBack: "ホームへ戻る",
  },
};

export function MonteCarloPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
