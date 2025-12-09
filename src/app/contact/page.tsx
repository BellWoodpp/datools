import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, defaultLocale } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

const dictionary = getDictionary(defaultLocale);

export const metadata = {
  title: `${dictionary.pages.contact.title} - DaTools`,
  description: dictionary.pages.contact.subtitle,
  alternates: {
    canonical: buildCanonicalPath(undefined, "contact"),
  },
};

export default function ContactPage() {
  return <PageTemplate dictionary={dictionary.pages.contact} locale={defaultLocale} />;
}
