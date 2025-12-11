import { notFound } from "next/navigation";
import { HomeFeed } from "@/components/home/home-feed";
import { getDictionary, locales } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";
import { Suspense } from "react";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleHome({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const normalizedLocale = locales.find((l) => l === locale);

  if (!normalizedLocale) {
    notFound();
  }

  const dictionary = getDictionary(normalizedLocale);

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

export function generateStaticParams() {
  // 为支持的语言生成静态参数
  return locales.map((locale) => ({ locale }));
}

// 生成元数据
export async function generateMetadata({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);

  if (!normalizedLocale) {
    return {
      title: "Data Analysis Tools – Daily Picks",
      description: "Discover trending data analysis tools across BI, ETL/ELT, AI assistants, and self-hosted or cloud solutions.",
      alternates: {
        canonical: "/",
      },
    };
  }

  return {
    title: "Data Analysis Tools – Daily Picks",
    description: "Discover trending data analysis tools across BI, ETL/ELT, AI assistants, and self-hosted or cloud solutions.",
    alternates: {
      canonical: buildCanonicalPath(normalizedLocale),
    },
  };
}
