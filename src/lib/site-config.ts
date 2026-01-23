const brandName = process.env.NEXT_PUBLIC_PROJECT_NAME || "DaTools";
const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_URL || "https://datools.org").trim();
const domain = (() => {
  try {
    return new URL(baseUrl).hostname;
  } catch {
    return "datools.org";
  }
})();

export const siteConfig = {
  brandName,
  domain,
  siteUrl: baseUrl,
  supportEmail: "stormrobin50@gmail.com",
  downloadPrefix: "datools",
  defaultDescription:
    "Text-to-speech and voice cloning for creators. Natural voices, multilingual support, fast generation, and simple sharing.",
  voiceAvatarVariant: "orb3d",
} as const;
