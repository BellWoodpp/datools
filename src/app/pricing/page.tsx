import { PageTemplate } from "@/components/pages/page-template";
import { getDictionary, defaultLocale } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

const dictionary = getDictionary(defaultLocale);

export const metadata = {
  title: `${dictionary.pages.pricing.title} - DaTools`,
  description: dictionary.pages.pricing.subtitle,
  alternates: {
    canonical: buildCanonicalPath(undefined, "pricing"),
  },
};

export default function PricingPage() {
  return <PageTemplate dictionary={dictionary.pages.pricing} locale={defaultLocale} />;
}
