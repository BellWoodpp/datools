// 导入元数据
// 导入Geist, Geist_Mono字体
// 导入全局css
// 导入Header,FooterWrapper

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "ShipBase - Enable secure sign-in methods for Shipbase",
  description: "Integrate Google and GitHub OAuth plus Magic Link email sign-in through Better Auth. Sessions stay on the server and automatically sync via HTTP-only cookies.",
  icons: {
    icon: "https://datools.org/data-a-tools.ico",
    shortcut: "https://datools.org/data-a-tools.ico",
    apple: "https://datools.org/data-a-tools.png",
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
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="c31qQEYvGp/28tgAFpJaPQ"
          async
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
