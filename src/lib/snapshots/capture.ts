
// src/lib/snapshots/capture.ts:1
import chromium from "@sparticuz/chromium";
import { chromium as playwrightChromium } from "playwright-core";

export async function captureWebsiteScreenshot({
  url,
  width,
  height,
}: {
  url: string;
  width: number;
  height: number;
}): Promise<Uint8Array> {
  const executablePath = await chromium.executablePath();

  const browser = await playwrightChromium.launch({
    args: chromium.args,
    executablePath,
    headless: true,
  });

  try {
    const page = await browser.newPage({
      viewport: { width, height },
      deviceScaleFactor: 1,
    });

    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 15_000,
    });

    await page.waitForTimeout(800);

    const buffer = await page.screenshot({
      type: "png",
      fullPage: false,
    });

    return buffer;
  } finally {
    await browser.close();
  }
}
