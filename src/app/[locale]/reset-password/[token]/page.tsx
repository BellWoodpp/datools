import { notFound } from "next/navigation";
import { ResetPasswordPanel } from "@/components/auth/reset-password-panel";
import { locales } from "@/i18n";

interface LocaleResetPasswordTokenPageProps {
  params: Promise<{
    locale: string;
    token: string;
  }>;
}

export default async function LocaleResetPasswordTokenPage({
  params,
}: LocaleResetPasswordTokenPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const token = resolvedParams.token;

  const normalizedLocale = locales.find((l) => l === locale);
  if (!normalizedLocale) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <ResetPasswordPanel locale={normalizedLocale} initialToken={token} />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Array.from({ length: 0 }, () => ({ locale, token: "" })),
  );
}
