import Link from "next/link";
import { CardDemo } from "@/components/login/login-card";
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

const dictionary = getDictionary(defaultLocale);
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

export const metadata = {
  title: `${dictionary.pages.login.title} - DaTools`,
  description: dictionary.pages.login.description,
  alternates: {
    canonical: buildCanonicalPath(undefined, "login"),
  },
};

export default function LoginPage() {
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
                <BreadcrumbPage>{dictionary.pages.login.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              {dictionary.pages.login.title}
            </h1>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              {dictionary.pages.login.subtitle}
            </p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              {dictionary.pages.login.description}
            </p>
          </div>

          <CardDemo locale={defaultLocale} />
        </div>
      </div>
    </div>
  );
}
