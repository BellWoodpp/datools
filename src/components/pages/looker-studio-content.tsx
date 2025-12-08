import { BiPageTemplate, type BiPageCopyMap } from "@/components/pages/bi-page-template";

const OFFICIAL_URL = "https://lookerstudio.google.com/";

const copyByLocale: BiPageCopyMap = {
  zh: {
    badge: "BI / 可视化 · Looker Studio",
    title: "Looker Studio（原 Data Studio）：免费可视化与仪表板",
    subtitle: "Google 出品的轻量仪表板工具，丰富连接器与共享嵌入",
    description:
      "Looker Studio 是 Google 的免费仪表板与可视化工具（原 Data Studio），支持 BigQuery、GA4、Sheets 等连接器，也有社区连接器扩展。适合市场运营、网站分析等轻量报表场景，支持协作、分享与嵌入。",
    highlights: [
      { title: "免费与易用", description: "拖拽式报表与图表，学习成本低。" },
      { title: "丰富连接器", description: "官方与社区连接器覆盖常用数据源（GA、Sheets、BigQuery 等）。" },
      { title: "共享与嵌入", description: "链接分享、协作编辑、可嵌入到网站或产品。" },
      { title: "轻量治理", description: "基于 Google 账号权限与简易刷新设置。" },
    ],
    useCases: ["网站/营销报表", "轻量运营仪表板", "与 GA/BigQuery/SaaS 的快速可视化", "可嵌入的公开/内网报表"],
    ctaVisit: "访问官网",
    ctaBack: "返回首页",
  },
  en: {
    badge: "BI / Visualization · Looker Studio",
    title: "Looker Studio (formerly Data Studio): free dashboards",
    subtitle: "Google lightweight visualization with rich connectors and sharing",
    description:
      "Looker Studio is Google's free dashboarding tool (formerly Data Studio) with connectors for BigQuery, GA4, Sheets, and many community sources. It's great for marketing/web analytics and lightweight reporting with collaboration, sharing, and embeds.",
    highlights: [
      { title: "Free & easy", description: "Drag-and-drop reports and charts with low learning curve." },
      { title: "Rich connectors", description: "Official/community connectors for GA, Sheets, BigQuery, and more." },
      { title: "Sharing & embeds", description: "Link sharing, collaborative editing, and embeddable reports." },
      { title: "Lightweight governance", description: "Google account permissions and simple refresh settings." },
    ],
    useCases: ["Web/marketing reports", "Lightweight ops dashboards", "Quick viz from GA/BigQuery/SaaS", "Embeddable public/internal reports"],
    ctaVisit: "Visit Looker Studio",
    ctaBack: "Back to home",
  },
};

export function LookerStudioPageContent({ locale }: { locale?: string }) {
  return <BiPageTemplate copyByLocale={copyByLocale} locale={locale} officialUrl={OFFICIAL_URL} />;
}
