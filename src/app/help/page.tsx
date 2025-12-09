import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, defaultLocale } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

const dictionary = getDictionary(defaultLocale);

export const metadata = {
  title: `${dictionary.pages.help.title} - DaTools`,
  description: dictionary.pages.help.subtitle,
  alternates: {
    canonical: buildCanonicalPath(undefined, "help"),
  },
};

export default function HelpPage() {
  return <PageTemplate dictionary={dictionary.pages.help} locale={defaultLocale} />;
}
