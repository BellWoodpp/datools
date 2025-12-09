import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { LogRocketPageContent } from "@/components/pages/product-analytics/logrocket-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "LogRocket — Data analysis tool",
  description:
    "Front-end monitoring and product experience analytics combining session replay, performance, and behavior insights.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "product-analytics", "logrocket"),
  },
};

export default function LogRocketPage() {
  return <LogRocketPageContent locale={defaultLocale} />;
}
