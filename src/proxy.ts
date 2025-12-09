import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 如果是默认语言前缀 /en，重定向到无前缀路径，保持查询参数
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en(\/|$)/, "/") || "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // 匹配所有路径，除了：
  // - api 路由
  // - admin 路由
  // - _next/static (静态文件)
  // - _next/image (图片优化)
  // - favicon.ico
  // - sitemap.xml, robots.txt (SEO 文件)
  matcher: [
    '/((?!api|admin|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
