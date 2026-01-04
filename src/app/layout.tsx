// 导入元数据
// 导入Geist, Geist_Mono字体
// 导入全局css
// 导入Header,FooterWrapper

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header, FooterWrapper } from "@/components/layout";
import { metadataBase } from "@/lib/seo";

// 声明常量geistSans
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// 声明常量geistMono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 暴露常量metadata
export const metadata: Metadata = {
  title: "DaTools | Data Analysis Tools, BI, ETL, AI Assistants Directory",
  description:
    "Discover data analysis tools across BI/visualization, product analytics, experimentation, ETL/ELT, warehouses, notebooks, governance, and AI/AutoML assistants with quick links and guides.",
  icons: {
    icon: [{ url: "https://r2.datools.org/data-a-tools.ico" }],
    shortcut: [{ url: "https://r2.datools.org/data-a-tools.ico" }],
    apple: [{ url: "https://r2.datools.org/data-a-tools.ico" }],
  },
  metadataBase,
};

// 暴露默认函数RootLayout
export default function RootLayout({
  children,
}: Readonly<{
      children: React.ReactNode;
    }>) {
  return (
    // suppressHydrationWarning：抑制水和警告
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WSD53WRG');
          `}
        </Script>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RXYHLNX1JM"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RXYHLNX1JM');
          `}
        </Script>
        {/* 谷歌广告代码 */}
        <Script
          id="google-adsense"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6581885234407347"
          crossOrigin="anonymous"
        />
        {/* ahrefs代码 */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="c31qQEYvGp/28tgAFpJaPQ"
          async
        ></script>
        {/* Privacy-friendly analytics by Plausible */}
        <Script
          async
          src="https://plausible.io/js/pa-4QgZhiy8H7f3-FR-2Ez4z.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`
            window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)};
            plausible.init=plausible.init||function(i){plausible.o=i||{}};
            plausible.init();
          `}
        </Script>
        {/* Umami Analytics */}
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="959ce417-4394-4685-aec9-f3b1f0b01004"
        ></script>
        {/* 显式声明远程 favicon，避免浏览器回退到 Next 默认图标 */}
        <link rel="icon" href="https://r2.datools.org/data-a-tools.ico" sizes="any" />
        <link rel="shortcut icon" href="https://r2.datools.org/data-a-tools.ico" />
        <link rel="apple-touch-icon" href="https://r2.datools.org/data-a-tools.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WSD53WRG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <div className="flex min-h-screen flex-col">
          <Header />
          {/* flex-1 = “我是一个弹性盒子里的孩子，请把父容器里除掉兄弟们固定高度后，剩下的所有空间都给我！” */}
          <main className="flex-1">
            {children}
          </main>
          <FooterWrapper />
        </div>
      </body>
    </html>
  );
}
