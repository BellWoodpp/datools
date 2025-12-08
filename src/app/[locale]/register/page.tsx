import { notFound } from "next/navigation";
import UserSignForm from "@/components/sign-up/user-sign-form";
import { getDictionary, locales } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";

interface LocaleRegisterPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleRegisterPage({ params }: LocaleRegisterPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const normalizedLocale = locales.find((l) => l === locale);
  if (!normalizedLocale) {
    notFound();
  }

  const dictionary = getDictionary(normalizedLocale);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              {dictionary.pages.signup.title}
            </h1>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              {dictionary.pages.signup.subtitle}
            </p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              {dictionary.pages.signup.description}
            </p>
          </div>

          <UserSignForm locale={normalizedLocale} />
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleRegisterPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);

  if (!normalizedLocale) {
    return {
      title: "Register - ShipBase",
      description: "Create your account to start your free trial.",
      alternates: {
        canonical: buildCanonicalPath(undefined, "register"),
      },
    };
  }

  const dictionary = getDictionary(normalizedLocale);

  return {
    title: `${dictionary.pages.signup.title} - ShipBase`,
    description: dictionary.pages.signup.description,
    alternates: {
      canonical: buildCanonicalPath(normalizedLocale, "register"),
    },
  };
}
