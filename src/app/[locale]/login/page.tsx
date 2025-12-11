import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, locales } from "@/i18n";
import { CardDemo } from "@/components/login/login-card";
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

interface LocaleLoginPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLoginPage({ params }: LocaleLoginPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  // 验证locale是否有效
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    notFound();
  }

  const dictionary = getDictionary(normalizedLocale);
  const homeLabel = HOME_LABELS[normalizedLocale] ?? HOME_LABELS.en ?? "Home";
  const basePath = normalizedLocale === "en" ? "/" : `/${normalizedLocale}`;
  
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
          
          <CardDemo locale={normalizedLocale} />
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLoginPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const normalizedLocale = locales.find((l) => l === locale);
  
  if (!normalizedLocale) {
    return {
      title: "Sign In - DaTools",
      description: "Sign in to your account to continue your journey with DaTools.",
      alternates: {
        canonical: buildCanonicalPath(undefined, "login"),
      },
    };;
  }

  const dictionary = getDictionary(normalizedLocale);
  
  return {
    title: `${dictionary.pages.login.title} - DaTools`,
    description: dictionary.pages.login.description,
    alternates: {
      canonical: buildCanonicalPath(normalizedLocale, "login"),
    },
  };;
}
