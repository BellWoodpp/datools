import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { JupyterVSCodePageContent } from "@/components/pages/jupyter-vscode-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  const isJa = locale === "ja";
  return {
    title: isZh ? "Jupyter / VS Code — Notebook 与本地/云端分析" : isJa ? "Jupyter / VS Code — ノートブック/ローカル・クラウド分析" : "Jupyter / VS Code — Notebook & local/cloud analytics",
    description: isZh
      ? "Jupyter Notebook/Lab 与 VS Code（Python）支持本地/云端分析，兼容 Python/R/Julia 等多语言。"
      : isJa
        ? "Jupyter Notebook/Lab と VS Code（Python）はローカル/クラウド分析をサポートし、Python/R/Julia など多言語に対応。"
        : "Jupyter Notebook/Lab plus VS Code (Python) for local/cloud analytics, supporting Python/R/Julia and more.",
  };
};

export default async function LocaleJupyterVSCodePage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <JupyterVSCodePageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "collaborative-analytics", "jupyter-vscode"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "collaborative-analytics", "jupyter-vscode"),
    },
  };
}

