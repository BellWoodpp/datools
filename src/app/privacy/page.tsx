import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, defaultLocale } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

const dictionary = getDictionary(defaultLocale);

export const metadata = {
  title: `${dictionary.pages.privacy.title} - DaTools`,
  description: dictionary.pages.privacy.subtitle,
  alternates: {
    canonical: buildCanonicalPath(undefined, "privacy"),
  },
};

export default function PrivacyPolicyPage() {
  return <PageTemplate dictionary={dictionary.pages.privacy} locale={defaultLocale} />;
}
