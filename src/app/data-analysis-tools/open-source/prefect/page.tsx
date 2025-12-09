import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { PrefectPageContent } from "@/components/pages/open-source/prefect-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Prefect — Open-source Python workflow orchestration",
  description:
    "Python-first open-source workflow orchestration with Flows/Tasks, retries, caching, deployments, and cloud/self-hosted monitoring.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "open-source", "prefect"),
  },
};

export default function PrefectPage() {
  return <PrefectPageContent locale={defaultLocale} />;
}
