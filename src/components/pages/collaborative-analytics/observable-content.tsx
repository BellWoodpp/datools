import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://observablehq.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "协作分析 · Observable",
    title: "Observable：浏览器内的可视化 Notebook",
    subtitle: "基于 JavaScript/Observable 语法，快速构建交互数据故事",
    description:
      "Observable 提供浏览器端的 Notebook 与可视化平台，使用 JavaScript/Observable 语法构建交互式图表和数据故事，支持实时协作与嵌入，适合数据可视化与分享。",
    highlights: [
      { title: "JS/Observable 语法", description: "熟悉的前端栈即可编写可视化与逻辑。" },
      { title: "交互与组件", description: "内置交互组件与丰富图表示例，快速复用。" },
      { title: "协作与嵌入", description: "实时协作、发布与嵌入到网站/产品。" },
      { title: "数据接入", description: "支持 fetch/API/文件等多种数据来源。" },
    ],
    useCases: ["交互式数据故事", "可视化原型与分享", "团队协作图表", "嵌入式可视化"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Collaborative Analytics · Observable",
    title: "Observable: browser-native visualization notebooks",
    subtitle: "JavaScript/Observable syntax to build interactive data stories",
    description:
      "Observable is a browser-based notebook and visualization platform using JavaScript/Observable syntax to create interactive charts and data stories with real-time collaboration and embedding.",
    highlights: [
      { title: "JS/Observable", description: "Use familiar web tech to build logic and visuals." },
      { title: "Interactivity & components", description: "Rich interactive components and chart examples to reuse." },
      { title: "Collaboration & embeds", description: "Real-time editing, publishing, and embeddable notebooks." },
      { title: "Data access", description: "Fetch from APIs/files and other sources with ease." },
    ],
    useCases: ["Interactive data stories", "Visualization prototyping/sharing", "Team charting", "Embeddable visuals"],
    ctaVisit: "Visit Observable",
    ctaBack: "Back to home",
  },
};

export function ObservablePageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
