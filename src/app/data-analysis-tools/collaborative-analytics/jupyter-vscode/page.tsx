import type { Metadata } from "next";
import { defaultLocale } from "@/i18n";
import { JupyterVSCodePageContent } from "@/components/pages/jupyter-vscode-content";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Jupyter / VS Code — 经典 Notebook 与本地/云开发",
  description: "Jupyter Notebook/Lab 与 VS Code 提供多语言、本地与远程的灵活分析与开发体验。",
  alternates: {
    canonical: buildCanonicalPath(undefined, "data-analysis-tools", "collaborative-analytics", "jupyter-vscode"),
  },
};

export default function JupyterVSCodePage() {
  return <JupyterVSCodePageContent locale={defaultLocale} />;
}
