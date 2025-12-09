import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, defaultLocale } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

const dictionary = getDictionary(defaultLocale);

export const metadata = {
  title: `${dictionary.pages.features.title} - DaTools`,
  description: dictionary.pages.features.subtitle,
  alternates: {
    canonical: buildCanonicalPath(undefined, "features"),
  },
};

export default function FeaturesPage() {
  return <PageTemplate dictionary={dictionary.pages.features} locale={defaultLocale} />;
}
