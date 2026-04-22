import { HomeFeed } from "@/components/home/home-feed";
import { getDictionary, defaultLocale } from "@/i18n";
import type { Metadata } from "next";

type SearchParams = Record<string, string | string[] | undefined>;

interface RootPageProps {
  searchParams?: Promise<SearchParams>;
}

export default async function RootPage({ searchParams }: RootPageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const dictionary = getDictionary(defaultLocale);

  return <HomeFeed content={dictionary.homeFeed} initialSearchParams={resolvedSearchParams} />;
}

export const metadata: Metadata = {
  title: "Data Analysis Tools – Daily Picks",
  description:
    "Discover trending data analysis tools across BI, ETL/ELT, AI assistants, and self-hosted or cloud solutions.",
  alternates: {
    canonical: "/",
  },
};
