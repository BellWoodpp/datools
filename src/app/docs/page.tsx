import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, defaultLocale } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

const dictionary = getDictionary(defaultLocale);

export const metadata = {
  title: `${dictionary.pages.docs.title} - DaTools`,
  description: dictionary.pages.docs.subtitle,
  alternates: {
    canonical: buildCanonicalPath(undefined, "docs"),
  },
};

export default function DocsPage() {
  return <PageTemplate dictionary={dictionary.pages.docs} locale={defaultLocale} />;
}
