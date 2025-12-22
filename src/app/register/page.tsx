import Link from "next/link";
import UserSignForm from "@/components/sign-up/user-sign-form";
import { getDictionary, defaultLocale } from "@/i18n";
import { buildCanonicalPath } from "@/lib/seo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const HOME_LABELS: Record<string, string> = {
  en: "Home",
  zh: "首页",
  es: "Inicio",
  ar: "الرئيسية",
  id: "Beranda",
  pt: "Início",
  fr: "Accueil",
  ja: "ホーム",
  ru: "Главная",
  de: "Start",
};

const dictionary = getDictionary(defaultLocale);

export const metadata = {
  title: `${dictionary.pages.signup.title} - DaTools`,
  description: dictionary.pages.signup.description,
  alternates: {
    canonical: buildCanonicalPath(undefined, "register"),
  },
};

export default function RegisterPage() {
  const homeLabel = HOME_LABELS[defaultLocale] ?? "Home";
  const basePath = "/";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1f] via-[#0c1e3c] to-[#0a0f1f]">
      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-6">
          <Breadcrumb className="text-sm text-neutral-500 dark:text-neutral-300">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={basePath}>{homeLabel}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{dictionary.pages.signup.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

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

          <UserSignForm locale={defaultLocale} />
        </div>
      </div>
    </div>
  );
}
