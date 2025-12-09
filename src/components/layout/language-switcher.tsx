"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, defaultLocale, type Locale } from "@/i18n";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  // 构建目标语言的链接，保证有真实 href 便于 SEO 抓取
  const buildLocalePath = (locale: Locale) => {
    let newPath = pathname;
    const pathSegments = pathname.split("/").filter(Boolean);

    if (pathSegments.length > 0 && locales.includes(pathSegments[0] as Locale)) {
      if (locale === defaultLocale) {
        pathSegments.shift();
        newPath = `/${pathSegments.join("/")}`;
        if (newPath === "/") {
          newPath = "/";
        }
      } else {
        pathSegments[0] = locale;
        newPath = `/${pathSegments.join("/")}`;
      }
    } else {
      newPath = locale === defaultLocale ? pathname : `/${locale}${pathname === "/" ? "" : pathname}`;
    }

    return newPath || "/";
  };

  const getLanguageLabel = (locale: Locale) => {
    switch (locale) {
      case "en":
        return "English";
      case "zh":
        return "中文";
      case "es":
        return "Español";
      case "ar":
        return "العربية";
      case "id":
        return "Bahasa Indonesia";
      case "pt":
        return "Português";
      case "fr":
        return "Français";
      case "ja":
        return "日本語";
      case "ru":
        return "Русский";
      case "de":
        return "Deutsch";
      default:
        return locale;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 px-2 md:w-8 md:p-0">
          <Languages className="h-4 w-4" />
          <span className="ml-1 md:hidden">{getLanguageLabel(currentLocale)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {locales.map((locale) => {
          const href = buildLocalePath(locale);
          return (
            <DropdownMenuItem
              key={locale}
              asChild
              className={locale === currentLocale ? "bg-accent" : ""}
            >
              <Link href={href} prefetch={false} className="w-full">
                {getLanguageLabel(locale)}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
