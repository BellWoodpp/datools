import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.bigeye.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "数据治理 · Bigeye",
    title: "Bigeye：数据质量监控",
    subtitle: "自助规则、SLA、异常检测与告警",
    description:
      "Bigeye 提供数据质量监控与指标平台，支持自助定义指标/规则、SLA 管理、异常检测与告警，帮助数据团队持续观测关键数据集的健康。",
    highlights: [
      { title: "规则与指标", description: "自助创建质量指标与校验规则。" },
      { title: "异常检测", description: "自动检测漂移、缺失、延迟等异常。" },
      { title: "SLA 与告警", description: "定义 SLA，异常即时告警与分派。" },
      { title: "集成生态", description: "支持主流仓库、编排与 BI 工具。" },
    ],
    useCases: ["数据质量监控", "SLA 保障", "异常报警与排查", "治理指标可视化"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Data Governance · Bigeye",
    title: "Bigeye: data quality monitoring",
    subtitle: "Self-serve rules, SLAs, anomaly detection, and alerts",
    description:
      "Bigeye is a data quality monitoring platform with self-serve metrics/rules, SLAs, anomaly detection, and alerting to keep critical datasets healthy.",
    highlights: [
      { title: "Rules & metrics", description: "Define quality metrics and checks easily." },
      { title: "Anomaly detection", description: "Detect drift, missing data, latency, and outliers." },
      { title: "SLAs & alerts", description: "Set SLAs with real-time alerts and ownership." },
      { title: "Integrations", description: "Works with major warehouses, orchestration, and BI tools." },
    ],
    useCases: ["Data quality monitoring", "SLA enforcement", "Alerting and triage", "Governance dashboards"],
    ctaVisit: "Visit Bigeye",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "データ品質 / ガバナンス · Bigeye",
    title: "Bigeye：データ品質モニタリング",
    subtitle: "セルフサービスのルール、SLA、異常検知とアラート",
    description:
      "Bigeye はデータ品質モニタリングを提供し、セルフサービスのルール設定、SLA、異常検知とアラートでパイプラインの健全性を保ちます。",
    highlights: [
      { title: "セルフサービスルール", description: "チームが自分で品質チェックを定義・管理。" },
      { title: "SLA とメトリクス", description: "データの SLO/SLA を可視化し、逸脱を検知。" },
      { title: "異常検知とアラート", description: "自動検知で問題を早期通知。" },
      { title: "統合", description: "既存のデータ基盤と連携し、監査と権限を提供。" },
    ],
    useCases: ["品質監視", "SLA 管理", "異常検知・通知", "パイプライン健全性の可視化"],
    ctaVisit: "公式サイトを見る",
    ctaBack: "ホームへ戻る",
  },
};

export function BigeyePageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
