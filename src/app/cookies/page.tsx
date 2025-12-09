import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, defaultLocale } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

const dictionary = getDictionary(defaultLocale);

export const metadata = {
  title: `${dictionary.pages.cookies.title} - DaTools`,
  description: dictionary.pages.cookies.subtitle,
  alternates: {
    canonical: buildCanonicalPath(undefined, "cookies"),
  },
};

export default function CookiesPage() {
  return <PageTemplate dictionary={dictionary.pages.cookies} locale={defaultLocale} />;
}
