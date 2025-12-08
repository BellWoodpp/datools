import type { MetadataRoute } from "next";
import { getDictionary, defaultLocale, locales } from "@/i18n";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

const normalizePath = (path: string) => {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
};

const buildUrl = (locale: string, path: string) => {
  const normalized = normalizePath(path);
  if (locale === defaultLocale) {
    return `${baseUrl}${normalized}`;
  }
  return `${baseUrl}/${locale}${normalized === "/" ? "" : normalized}`;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls = new Set<string>();

  // 首页
  urls.add(buildUrl(defaultLocale, "/"));
  locales
    .filter((l) => l !== defaultLocale)
    .forEach((locale) => urls.add(buildUrl(locale, "/")));

  // 从 home feed 的工具列表收集详情页链接
  const dictionary = getDictionary(defaultLocale);
  const toolLinks =
    dictionary.homeFeed?.tools
      ?.map((tool) => tool.link)
      .filter((link): link is string => Boolean(link)) ?? [];

  toolLinks.forEach((link) => {
    urls.add(buildUrl(defaultLocale, link));
    locales
      .filter((l) => l !== defaultLocale)
      .forEach((locale) => urls.add(buildUrl(locale, link)));
  });

  return Array.from(urls).map((loc) => ({
    url: loc,
    lastModified: now,
  }));
}

