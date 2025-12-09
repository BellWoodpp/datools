import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { StatsigPageContent } from "@/components/pages/attribution/statsig-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Statsig — Experimentation & feature management",
  description:
    "Product experimentation and feature management with stats engine, feature flags, metrics, and fast rollback.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "attribution", "statsig"),
  },
};

export default function StatsigPage() {
  return <StatsigPageContent locale={defaultLocale} />;
}
