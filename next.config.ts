import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 关闭 Next/Vercel Image Optimization API，让 `/_next/image` 直接 404，
    // 避免被当作“公共图片变换代理”刷爆 Transformations。
    // 图片优化走 `images.weserv.nl` + `@unpic/react`（wsrv provider）。
    unoptimized: true,
  },
};

export default nextConfig;
