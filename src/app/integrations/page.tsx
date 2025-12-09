import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, defaultLocale } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

const dictionary = getDictionary(defaultLocale);

export const metadata = {
  title: `${dictionary.pages.integrations.title} - DaTools`,
  description: dictionary.pages.integrations.subtitle,
  alternates: {
    canonical: buildCanonicalPath(undefined, "integrations"),
  },
};

export default function IntegrationsPage() {
  return <PageTemplate dictionary={dictionary.pages.integrations} locale={defaultLocale} />;
}
