import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import { TrayIoPageContent } from "@/components/pages/elt-integration/tray-io-content";
import { buildCanonicalPath } from "@/lib/seo";

interface LocalePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const getMeta = (locale?: string) => {
  const isZh = locale === "zh";
  return {
    title: isZh ? "Tray.io — 低代码 iPaaS 与自动化" : "Tray.io — low-code iPaaS & automation",
    description: isZh
      ? "Tray.io 提供可视化集成与事件/定时触发，连接多 SaaS 构建多步工作流。"
      : "Tray.io offers visual integrations with event/cron triggers to build multi-step workflows across SaaS apps.",
  };
};

export default async function LocaleTrayIoPage({ params }: LocalePageProps) {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    notFound();
  }

  return <TrayIoPageContent locale={locale} />;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);
  const meta = getMeta(locale);

  if (!locale) {
    return {
      ...meta,
      alternates: {
        canonical: buildCanonicalPath(undefined, "data-analysis-tools", "ELT-Integration", "tray-io"),
      },
    };
  }

  return {
    ...meta,
    alternates: {
      canonical: buildCanonicalPath(locale, "data-analysis-tools", "ELT-Integration", "tray-io"),
    },
  };
}
