import Link from "next/link";
import { defaultLocale } from "@/i18n";

const OFFICIAL_URL = "https://looker.com/";

type Copy = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: { title: string; description: string }[];
  useCases: string[];
  ctaVisit: string;
  ctaBack: string;
};

const copyByLocale: Record<string, Copy> = {
  zh: {
    badge: "BI / 可视化 · Looker",
    title: "Looker：LookML 语义层与可视化",
    subtitle: "基于 LookML 的统一指标建模，支持仪表板、嵌入与数据治理",
    description:
      "Looker（Google Cloud）提供基于 LookML 的语义层与可视化分析，统一口径管理维度与度量，支持仪表板、数据探索、内嵌分析和权限治理。适合构建产品内嵌分析和企业级指标平台。",
    highlights: [
      { title: "LookML 语义层", description: "声明式模型管理维度/度量/权限，复用统一指标口径。" },
      { title: "仪表板与探索", description: "支持自助探索、参数化筛选、下钻与可视化组件。" },
      { title: "嵌入与 API", description: "Embed SDK 与 API 支持在产品内集成洞察与图表。" },
      { title: "治理与权限", description: "细粒度访问控制、行列级安全、审计与版本管理。" },
    ],
    useCases: ["统一指标平台", "产品内嵌分析", "自助式探索与可视化", "多团队共享的数据治理"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "BI / Visualization · Looker",
    title: "Looker: LookML semantic layer & analytics",
    subtitle: "LookML-modeled metrics with dashboards, embeds, and governance",
    description:
      "Looker (Google Cloud) delivers a semantic layer with LookML to model dimensions and measures, enabling governed dashboards, exploration, embedded analytics, and fine-grained permissions. Designed for unified metrics and product-embedded insights.",
    highlights: [
      { title: "LookML semantic layer", description: "Declarative modeling of dimensions/measures/permissions for consistent metrics." },
      { title: "Dashboards & explore", description: "Self-service exploration with filters, drill-downs, and rich visual components." },
      { title: "Embeds & APIs", description: "Embed SDK and APIs to bring insights and charts into your product." },
      { title: "Governance & security", description: "Fine-grained access, row/column security, auditing, and version control." },
    ],
    useCases: ["Unified metric layer", "Embedded analytics", "Self-service exploration", "Governed sharing across teams"],
    ctaVisit: "Visit Looker",
    ctaBack: "Back to home",
  },
  ja: {
    badge: "BI / 可視化 · Looker",
    title: "Looker：LookML セマンティック層と分析",
    subtitle: "LookML で指標をモデル化し、ダッシュボード、埋め込み、ガバナンスを提供",
    description:
      "Looker（Google Cloud）は LookML によるセマンティック層でディメンションと指標をモデル化し、ガバナンスされたダッシュボード、探索、埋め込み分析、きめ細かな権限を提供します。統一指標とプロダクト内インサイトに適しています。",
    highlights: [
      { title: "LookML セマンティック層", description: "ディメンション/指標/権限を宣言的に管理し、統一指標を再利用。" },
      { title: "探索とダッシュボード", description: "セルフサービス探索、パラメータ化フィルタ、ドリル、可視化コンポーネント。" },
      { title: "埋め込みと API", description: "Embed SDK と API で製品にインサイトやチャートを組み込み。" },
      { title: "ガバナンスと権限", description: "細粒度アクセス、行・列レベルセキュリティ、監査とバージョン管理。" },
    ],
    useCases: ["統一指標プラットフォーム", "プロダクト埋め込み分析", "セルフサービス探索と可視化", "複数チームでのデータガバナンス"],
    ctaVisit: "公式サイトを見る",
    ctaBack: "ホームへ戻る",
  },
};

const getCopy = (locale?: string) => copyByLocale[locale ?? defaultLocale] ?? copyByLocale.en;

export function LookerPageContent({ locale }: { locale?: string }) {
  const copy = getCopy(locale);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f1f] via-[#0c1e3c] to-[#0a0f1f] text-slate-100">
      <div className="mx-auto max-w-5xl space-y-10 px-4 py-12">
        <header className="space-y-3">
          <div className="inline-flex items-center rounded-full border border-[#1e5bff]/50 bg-[#0f1f3f]/70 px-3 py-1 text-xs font-semibold text-[#12c2e9]">
            {copy.badge}
          </div>
          <h1 className="text-3xl font-bold leading-tight">{copy.title}</h1>
          <p className="text-lg text-slate-200">{copy.subtitle}</p>
          <p className="text-sm text-slate-300/90">{copy.description}</p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {copy.highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#1e5bff]/30 bg-[#0f172a]/80 p-4 shadow-[0_15px_40px_-20px_rgba(18,194,233,0.5)]"
            >
              <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </section>

        <section className="space-y-3 rounded-xl border border-[#1e5bff]/30 bg-[#0f172a]/80 p-6 shadow-[0_15px_45px_-22px_rgba(30,91,255,0.55)]">
          <h2 className="text-xl font-semibold text-slate-50">适用场景 / Use cases</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {copy.useCases.map((useCase) => (
              <li key={useCase} className="rounded-lg border border-[#1e5bff]/20 bg-[#0b162e]/80 p-3 text-sm text-slate-200">
                {useCase}
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-wrap gap-3">
          <Link
            href={OFFICIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#12c2e9] to-[#1e5bff] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(30,91,255,0.8)] hover:from-[#1e5bff] hover:to-[#12c2e9]"
          >
            {copy.ctaVisit}
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-lg border border-[#1e5bff]/40 bg-[#0f1f3f] px-4 py-2 text-sm font-semibold text-slate-100 hover:border-[#12c2e9] hover:text-[#12c2e9]"
          >
            {copy.ctaBack}
          </Link>
        </section>
      </div>
    </main>
  );
}
