import { type Locale } from "@/i18n/types";

export const CANONICAL_BASE_URL = "https://datools.org";
export const metadataBase = new URL(CANONICAL_BASE_URL);

export function buildCanonicalPath(locale?: Locale, ...segments: string[]): string {
  const normalizedSegments = segments
    .filter(Boolean)
    .map((segment) => segment.replace(/^\/+|\/+$/g, ""));
  const localeSegment = locale?.replace(/^\/+|\/+$/g, "");
  const path = [localeSegment, ...normalizedSegments].filter(Boolean).join("/");
  return path ? `/${path}` : "/";
}
