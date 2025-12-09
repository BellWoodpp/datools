import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://jupyter.org/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "Notebook · Jupyter / VS Code",
    title: "Jupyter / VS Code：经典 Notebook 与本地/云开发",
    subtitle: "支持 Python/R/Julia 等多语言，适合数据科学与工程",
    description:
      "Jupyter Notebook/Lab 与 VS Code (Python) 组成灵活的本地/云端分析环境，支持多语言、可视化与扩展生态，适合数据科学、原型与教学。可结合远程内核与云服务协作。",
    highlights: [
      { title: "多语言支持", description: "Python/R/Julia 等 Kernel，扩展生态丰富。" },
      { title: "本地与远程", description: "本地开发或连接远程/云内核，灵活部署。" },
      { title: "可视化与扩展", description: "支持交互式图表、调试、LSP 与众多插件。" },
      { title: "与 VS Code 集成", description: "在 VS Code 中运行 Notebook，享受版本与调试工具。" },
    ],
    useCases: ["数据科学与建模", "教学与培训", "原型与实验", "本地/云混合开发"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Notebook · Jupyter / VS Code",
    title: "Jupyter / VS Code: classic notebooks + local/cloud dev",
    subtitle: "Polyglot (Python/R/Julia), great for data science and teaching",
    description:
      "Jupyter Notebook/Lab plus VS Code (Python) form a flexible local/cloud environment with multi-language kernels, rich visualization, and extensions—ideal for data science, prototyping, and education, including remote kernels and cloud use.",
    highlights: [
      { title: "Polyglot kernels", description: "Python/R/Julia and many others with broad extensions." },
      { title: "Local & remote", description: "Run locally or connect to remote/cloud kernels." },
      { title: "Visuals & extensions", description: "Interactive charts, debugging, LSP, and plugin ecosystem." },
      { title: "VS Code integration", description: "Run notebooks in VS Code with versioning and debugging tools." },
    ],
    useCases: ["Data science/modeling", "Teaching/training", "Prototyping/experiments", "Hybrid local/cloud dev"],
    ctaVisit: "Visit Jupyter",
    ctaBack: "Back to home",
  },
};

export function JupyterVSCodePageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
