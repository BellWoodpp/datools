import { notFound } from "next/navigation";
import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, locales } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

interface LocaleHelpPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleHelpPage({ params }: LocaleHelpPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    notFound();
  }

  const dictionary = getDictionary(normalizedLocale);
  return <PageTemplate dictionary={dictionary.pages.help} locale={normalizedLocale} />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleHelpPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    return {
      title: "Help Center - DaTools",
      description: "Get the support you need",
      alternates: {
        canonical: buildCanonicalPath(undefined, "help"),
      },
    };;
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return {
    title: `${dictionary.pages.help.title} - DaTools`,
    description: dictionary.pages.help.subtitle,
    alternates: {
      canonical: buildCanonicalPath(normalizedLocale, "help"),
    },
  };;
}
