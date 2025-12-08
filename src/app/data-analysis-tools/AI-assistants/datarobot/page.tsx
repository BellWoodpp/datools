import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { DataRobotPageContent } from "@/components/pages/datarobot-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "DataRobot — Enterprise AutoML & MLOps",
  description:
    "Enterprise AutoML and MLOps platform with automated feature engineering, leaderboards, explainability, and monitored deployments across cloud/on-prem.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "AI-assistants", "datarobot"),
  },
};

export default function DataRobotPage() {
  return <DataRobotPageContent locale={defaultLocale} />;
}
