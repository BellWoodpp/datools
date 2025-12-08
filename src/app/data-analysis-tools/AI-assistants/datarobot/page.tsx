import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { DataRobotPageContent } from "@/components/pages/datarobot-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "DataRobot — Enterprise AutoML & MLOps",
  description:
    "DataRobot 提供自动特征工程、模型搜索与部署监控的企业级 AutoML/MLOps 平台，支持多云与本地治理。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "AI-assistants", "datarobot"),
  },
};

export default function DataRobotPage() {
  return <DataRobotPageContent locale={defaultLocale} />;
}
