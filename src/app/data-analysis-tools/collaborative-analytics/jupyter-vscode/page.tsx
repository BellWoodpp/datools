import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { JupyterVSCodePageContent } from "@/components/pages/collaborative-analytics/jupyter-vscode-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Jupyter / VS Code — Data analysis tool",
  description:
    "Jupyter Notebook/Lab plus VS Code (Python) for local/cloud analytics, supporting Python/R/Julia and more.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "collaborative-analytics", "jupyter-vscode"),
  },
};

export default function JupyterVSCodePage() {
  return <JupyterVSCodePageContent locale={defaultLocale} />;
}
