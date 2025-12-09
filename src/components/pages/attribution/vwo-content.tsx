import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://vwo.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "实验 / 归因 · VWO",
    title: "VWO：可视化优化与实验",
    subtitle: "A/B、多变量测试，配合热图与录屏，提升转化",
    description:
      "VWO 提供可视化编辑、A/B 与多变量测试、热图与 Session 回放，以及转化分析，帮助团队优化网站/应用体验与转化率。",
    highlights: [
      { title: "可视化编辑", description: "无代码修改页面并创建变体。" },
      { title: "实验套件", description: "A/B、多变量、拆分 URL 测试等。" },
      { title: "行为洞察", description: "热图、录屏与漏斗定位体验问题。" },
      { title: "细分与定位", description: "基于受众/设备/地理等投放实验。" },
    ],
    useCases: ["转化率优化", "落地页与漏斗实验", "体验问题定位", "个性化与定向测试"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "Experimentation · VWO",
    title: "VWO: visual optimization and testing",
    subtitle: "A/B and multivariate tests with heatmaps and recordings",
    description:
      "VWO combines visual editing, A/B and multivariate testing, heatmaps, session recordings, and conversion analytics to improve site/app experiences.",
    highlights: [
      { title: "Visual editor", description: "Create variants without code." },
      { title: "Experiment suite", description: "A/B, multivariate, split URL, and more." },
      { title: "Behavior insights", description: "Heatmaps, recordings, and funnels to find issues." },
      { title: "Targeting", description: "Audience/device/geo targeting for experiments." },
    ],
    useCases: ["Conversion optimization", "Landing page/funnel tests", "UX issue detection", "Personalized testing"],
    ctaVisit: "Visit VWO",
    ctaBack: "Back to home",
  },
};

export function VWOPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
