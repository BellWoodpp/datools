import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { TrayIoPageContent } from "@/components/pages/elt-integration/tray-io-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tray.io — Data analysis tool",
  description:
    "Low-code iPaaS with visual integration and automation for business/engineering teams to orchestrate APIs and events.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "tray-io"),
  },
};

export default function TrayIoPage() {
  return <TrayIoPageContent locale={defaultLocale} />;
}
