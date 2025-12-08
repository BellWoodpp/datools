import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://www.matillion.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "ELT / 集成 · Matillion",
    title: "Matillion：云数据仓库的 ELT/ETL",
    subtitle: "可视化编排与转换，支持主流云仓与调度",
    description:
      "Matillion 专注云数据仓库的 ELT/ETL，提供可视化任务编排、转换组件、调度与参数化，支持 Snowflake、BigQuery、Redshift 等，适合数据工程团队构建批处理与增量管道。",
    highlights: [
      { title: "可视化作业", description: "拖拽式组件与脚本结合，快速搭建流程。" },
      { title: "云仓优化", description: "针对 Snowflake/BigQuery/Redshift 等做性能优化。" },
      { title: "调度与参数", description: "支持计划、变量、环境与审计日志。" },
      { title: "团队协作", description: "版本与权限控制，便于多人协作。" },
    ],
    useCases: ["云仓 ETL/ELT", "批处理/增量同步", "数据建模与转换", "团队化数据工程"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "ELT / Integration · Matillion",
    title: "Matillion: ELT/ETL for cloud warehouses",
    subtitle: "Visual orchestration and transforms with scheduling for major warehouses",
    description:
      "Matillion focuses on ELT/ETL for cloud warehouses, offering visual job orchestration, components, scheduling, and parameterization tuned for Snowflake, BigQuery, Redshift, and more—built for data engineering teams.",
    highlights: [
      { title: "Visual jobs", description: "Drag-and-drop plus scripting to build pipelines quickly." },
      { title: "Warehouse-tuned", description: "Optimized for Snowflake/BigQuery/Redshift performance." },
      { title: "Scheduling & params", description: "Schedules, variables, environments, and audit logging." },
      { title: "Collaboration", description: "Versioning and permissions for team workflows." },
    ],
    useCases: ["Cloud warehouse ETL/ELT", "Batch and incremental sync", "Data modeling/transforms", "Team-based data engineering"],
    ctaVisit: "Visit Matillion",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "ELT / 統合 · Matillion",
    title: "Matillion：クラウド倉庫向け ELT/ETL",
    subtitle: "ビジュアル変換とスケジュールで Snowflake/BigQuery/Redshift などに対応",
    description:
      "Matillion はクラウド倉庫向けの ELT/ETL を提供し、ビジュアルオーケストレーション、変換、スケジュールで Snowflake/BigQuery/Redshift などをサポートします。",
    highlights: [
      { title: "ビジュアルフロー", description: "UI でジョブを組み、オーケストレーションを簡単に。" },
      { title: "変換コンポーネント", description: "一般的な変換をドラッグ＆ドロップで設定。" },
      { title: "スケジュール", description: "定期ジョブでデータを更新。" },
      { title: "クラウド倉庫対応", description: "主要なクラウド倉庫と連携。" },
    ],
    useCases: ["倉庫向け ETL/ELT", "ビジュアルでの変換ジョブ作成", "定期データ更新", "クラウド倉庫の近代化"],
    ctaVisit: "公式サイトを見る",
    ctaBack: "ホームへ戻る",
  },
};

export function MatillionPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
