import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { SplitIoPageContent } from "@/components/pages/split-io-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Split.io — Feature flags & experimentation",
  description:
    "Split.io delivers feature flagging and experimentation with rollbacks, metrics monitoring, and governance for product/engineering teams.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "attribution", "split-io"),
  },
};

export default function SplitIOPage() {
  return <SplitIoPageContent locale={defaultLocale} />;
}
