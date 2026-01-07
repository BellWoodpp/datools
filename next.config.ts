import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 该项目的图片大多来自外部 CDN（且组件里已大量使用 unoptimized），
    // 开放 remotePatterns: "**" 会导致 /_next/image 变成“公共图片变换代理”，
    // 极易被刷爆 Vercel Image Optimization Transformations。
    // 关闭 Image Optimization API 可直接止血。
    unoptimized: true,
  },
};

export default nextConfig;
