import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, defaultLocale } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

const dictionary = getDictionary(defaultLocale);

export const metadata = {
  title: `${dictionary.pages.terms.title} - DaTools`,
  description: dictionary.pages.terms.subtitle,
  alternates: {
    canonical: buildCanonicalPath(undefined, "terms"),
  },
};

export default function TermsPage() {
  return <PageTemplate dictionary={dictionary.pages.terms} locale={defaultLocale} />;
}
