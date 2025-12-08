import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.stitchdata.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "ELT / 集成 · Stitch",
    title: "Stitch：轻量云端 ELT",
    subtitle: "常用连接器与调度，快速将数据加载到仓库",
    description:
      "Stitch（Talend）是轻量云端 ELT，提供常用连接器、调度与基础监控，将数据库/SaaS 数据加载到云数据仓库，适合快速上手的小团队。",
    highlights: [
      { title: "即用连接器", description: "覆盖主流数据库与 SaaS，配置简单。" },
      { title: "调度与监控", description: "可设定同步频率，查看作业状态。" },
      { title: "模式管理", description: "基础模式演进与字段映射支持。" },
      { title: "云端托管", description: "无需运维，快速启动 ELT 管道。" },
    ],
    useCases: ["小团队快速集成", "BI 数据入仓", "轻量 ELT 管道", "低运维成本场景"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "ELT / Integration · Stitch",
    title: "Stitch: lightweight cloud ELT",
    subtitle: "Popular connectors and scheduling to load data into warehouses",
    description:
      "Stitch (Talend) is a lightweight cloud ELT with common connectors, scheduling, and basic monitoring to load DB/SaaS data into cloud warehouses—great for small teams to get started quickly.",
    highlights: [
      { title: "Ready connectors", description: "Mainstream DB/SaaS coverage with simple setup." },
      { title: "Scheduling & monitoring", description: "Configure sync cadence and track job status." },
      { title: "Schema handling", description: "Basic schema evolution and mapping support." },
      { title: "Fully hosted", description: "No ops required; launch ELT pipelines fast." },
    ],
    useCases: ["Quick start for small teams", "Load data for BI", "Lightweight ELT pipelines", "Low-ops environments"],
    ctaVisit: "Visit Stitch",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "ELT / 統合 · Stitch",
    title: "Stitch：軽量クラウド ELT",
    subtitle: "人気コネクタとスケジュールで倉庫にロード",
    description:
      "Stitch は Talend 傘下の軽量クラウド ELT で、よく使われるコネクタとスケジュール機能を備え、データを倉庫にロードします。",
    highlights: [
      { title: "軽量サービス", description: "セットアップが簡単なクラウド ELT。" },
      { title: "主要コネクタ", description: "一般的なソースに対応し、素早く連携。" },
      { title: "スケジュール", description: "定期実行でデータを自動ロード。" },
      { title: "倉庫出力", description: "主要クラウド倉庫へロード可能。" },
    ],
    useCases: ["素早い ELT 立ち上げ", "軽量なデータ同期", "レポーティング用のデータロード", "SaaS/DB の定期取り込み"],
    ctaVisit: "公式サイトを見る",
    ctaBack: "ホームへ戻る",
  },
};

export function StitchPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
