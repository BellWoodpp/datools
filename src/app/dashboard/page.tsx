import { Metadata } from "next";
import { redirect } from "next/navigation";
import { DashboardPage } from "@/components/dashboard";
import { auth } from "@/lib/auth-server/auth";
import { getDictionary, defaultLocale } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

export const metadata: Metadata = {
  title: getDictionary(defaultLocale).pages.dashboard.title,
  description: getDictionary(defaultLocale).pages.dashboard.description,
  alternates: {
    canonical: buildCanonicalPath(undefined, "dashboard"),
  },
};

export default async function DashboardRootPage() {
  const hdrs = await import("next/headers").then((mod) => mod.headers());
  const session = await auth.api.getSession({ headers: hdrs });

  if (!session?.user) {
    redirect("/login");
  }

  const dictionary = getDictionary(defaultLocale);

  return (
    <DashboardPage
      dictionary={dictionary.pages.dashboard}
      userName={session.user.name || undefined}
    />
  );
}
