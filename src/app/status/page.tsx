import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, defaultLocale } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

const dictionary = getDictionary(defaultLocale);

export const metadata = {
  title: `${dictionary.pages.status.title} - DaTools`,
  description: dictionary.pages.status.subtitle,
  alternates: {
    canonical: buildCanonicalPath(undefined, "status"),
  },
};

export default function StatusPage() {
  return <PageTemplate dictionary={dictionary.pages.status} locale={defaultLocale} />;
}
