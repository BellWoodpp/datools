import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://polynote.org/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "协作分析 · Polynote",
    title: "Polynote：开源多语言 Notebook",
    subtitle: "混合 Scala/Python 等语言，强类型与可重复执行，适合工程与科学计算",
    description:
      "Polynote 是开源多语言 Notebook，支持在同一文档中混合 Scala/Python 等，具备强类型提示与可重复执行，适合数据工程、数值计算与实验复现。",
    highlights: [
      { title: "多语言混合", description: "同一 Notebook 中混合 Scala/Python 等语言执行。" },
      { title: "强类型提示", description: "静态分析与类型提示，减少运行时错误。" },
      { title: "可重复执行", description: "每个 Cell 独立可重复，避免状态污染。" },
      { title: "开源自托管", description: "适合对环境与依赖可控的团队。" },
    ],
    useCases: ["数据工程与 ETL 原型", "数值/科学计算", "模型实验与复现", "多语言协作分析"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Collaborative Analytics · Polynote",
    title: "Polynote: open-source polyglot notebook",
    subtitle: "Mix Scala/Python etc. with strong typing and reproducibility",
    description:
      "Polynote is an open-source polyglot notebook mixing Scala, Python, and more in one doc with strong typing and reproducible cells—suited for data engineering, numerical/scientific work, and experiments.",
    highlights: [
      { title: "Polyglot in one notebook", description: "Run Scala/Python and others together in one flow." },
      { title: "Strong typing", description: "Static analysis and type hints reduce runtime errors." },
      { title: "Reproducible cells", description: "Cell-level isolation to avoid state pollution." },
      { title: "Open-source self-hosted", description: "Great for teams needing environment control." },
    ],
    useCases: ["Data engineering/ETL prototyping", "Numerical/scientific computing", "Model experiments/repro", "Polyglot collaborative analysis"],
    ctaVisit: "Visit Polynote",
    ctaBack: "Back to home",
  },
};

export function PolynotePageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
