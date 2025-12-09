import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ResetPasswordPanel } from "@/components/auth/reset-password-panel";
import { locales } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

interface LocaleResetPasswordPageProps {
  params: Promise<{
    locale: string;
  }>;
  searchParams?: Promise<{
    token?: string;
  }>;
}

export default async function LocaleResetPasswordPage({
  params,
  searchParams,
}: LocaleResetPasswordPageProps) {
  const resolvedParams = await params;
  const resolvedSearch = (await searchParams) || {};
  const locale = resolvedParams.locale;

  const normalizedLocale = locales.find((l) => l === locale);
  if (!normalizedLocale) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <ResetPasswordPanel
          locale={normalizedLocale}
          initialToken={resolvedSearch.token}
        />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleResetPasswordPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = locales.find((l) => l === resolvedParams.locale);

  if (!locale) {
    return {
      title: "Reset password",
      description: "Reset your account password securely.",
      alternates: {
        canonical: buildCanonicalPath(undefined, "reset-password"),
      },
    };
  }

  return {
    title: "Reset password",
    description: "Reset your account password securely.",
    alternates: {
      canonical: buildCanonicalPath(locale, "reset-password"),
    },
  };
}
