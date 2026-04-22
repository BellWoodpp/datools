import { notFound } from "next/navigation";
import { HomeFeed } from "@/components/home/home-feed";
import { getDictionary, locales } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

type SearchParams = Record<string, string | string[] | undefined>;

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
  searchParams?: Promise<SearchParams>;
}

export default async function LocaleHome({ params, searchParams }: LocalePageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = (await searchParams) ?? {};
  const locale = resolvedParams.locale;

  const normalizedLocale = locales.find((l) => l === locale);

  if (!normalizedLocale) {
    notFound();
  }

  const dictionary = getDictionary(normalizedLocale);

  return <HomeFeed content={dictionary.homeFeed} initialSearchParams={resolvedSearchParams} />;
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
