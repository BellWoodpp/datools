import type { Metadata } from "next";
import { ResetPasswordPanel } from "@/components/auth/reset-password-panel";
import { defaultLocale } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

interface ResetPasswordPageProps {
  searchParams?: Promise<{
    token?: string;
  }>;
}

export default async function ResetPasswordPage({
  searchParams,
}: ResetPasswordPageProps) {
  const resolvedSearch = (await searchParams) || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <ResetPasswordPanel
          locale={defaultLocale}
          initialToken={resolvedSearch.token}
        />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Reset password",
  description: "Reset your account password securely.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "reset-password"),
  },
};
