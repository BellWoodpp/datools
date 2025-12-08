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
            Loading page...
          </div>
        </main>
      }
    >
      <HomeFeed content={dictionary.homeFeed} />
    </Suspense>
  );
}

export const metadata: Metadata = {
  title: "Data Analysis Tools – Daily Picks",
  description:
    "Discover trending data analysis tools across BI, ETL/ELT, AI assistants, and self-hosted or cloud solutions.",
  alternates: {
    canonical: "/",
  },
};
