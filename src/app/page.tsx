import { HomeFeed } from "@/components/home/home-feed";
import { getDictionary, defaultLocale } from "@/i18n";
import type { Metadata } from "next";
import { Suspense } from "react";

export default function RootPage() {
  const dictionary = getDictionary(defaultLocale);
  return (
    <Suspense
      fallback={
        <main className="bg-gradient-to-b from-[#0a0f1f] via-[#0c1e3c] to-[#0a0f1f]">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-300">
            正在加载页面...
          </div>
        </main>
      }
    >
      <HomeFeed content={dictionary.homeFeed} />
    </Suspense>
  );
}

export const metadata: Metadata = {
  title: "Data Analysis Tools – 今日精选导航",
  description:
    "Discover trending data analysis tools: BI, ETL, AI 助手、自托管与云端解决方案的每日精选导航。",
  alternates: {
    canonical: "/",
  },
};
