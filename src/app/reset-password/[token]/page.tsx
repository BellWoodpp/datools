import type { Metadata } from "next";
import { ResetPasswordPanel } from "@/components/auth/reset-password-panel";
import { buildCanonicalPath } from "@/lib/seo";

interface ResetPasswordTokenPageProps {
  params: Promise<{
    token: string;
  }>;
}

export default async function ResetPasswordTokenPage({
  params,
}: ResetPasswordTokenPageProps) {
  const resolvedParams = await params;
  const token = resolvedParams.token;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <ResetPasswordPanel initialToken={token} />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Reset password",
  description: "Enter your reset token to set a new password.",
  alternates: {
    canonical: buildCanonicalPath(undefined, "reset-password"),
  },
};
