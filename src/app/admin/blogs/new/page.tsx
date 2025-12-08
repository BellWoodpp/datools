// BlogEditor:编辑博客内容
import { BlogEditor } from "@/components/admin";
import { getDictionary } from "@/i18n";
import { auth } from "@/lib/auth-server/auth";
import { isAdmin } from "@/lib/auth-server/admin";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { buildCanonicalPath } from "@/lib/seo";

export default async function NewBlogPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // 检查是否登录
  if (!session?.user) {
    redirect("/login");
  }

  // 检查是否为管理员
  if (!isAdmin(session.user.email)) {
    redirect("/");
  }

  const dictionary = getDictionary("en"); // 默认使用英文
  
  return <BlogEditor dictionary={dictionary} />;
}

export async function generateMetadata() {
  return {
    title: "Create blog - ShipBase",
    description: "Create a new blog post",
    alternates: {
      canonical: buildCanonicalPath(undefined, "admin", "blogs", "new"),
    },
  };
}
