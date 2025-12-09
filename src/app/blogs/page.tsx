import { BlogsPage } from "@/components/blogs";
import { getDictionary, defaultLocale } from "@/i18n";
import { db } from "@/lib/db/client";
import { blogs } from "@/lib/db/schema/blogs";
import { buildCanonicalPath } from "@/lib/seo";
import { and, desc, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

const dictionary = getDictionary(defaultLocale);

export const metadata = {
  title: `${dictionary.pages.blogs.title} - DaTools`,
  description: dictionary.pages.blogs.subtitle,
  alternates: {
    canonical: buildCanonicalPath(undefined, "blogs"),
  },
};

export default async function BlogsRootPage() {
  const blogPosts = await db
    .select()
    .from(blogs)
    .where(
      and(eq(blogs.status, "published"), eq(blogs.visibility, "public"))
    )
    .orderBy(desc(blogs.featured), desc(blogs.publishedAt), desc(blogs.createdAt));

  return <BlogsPage dictionary={dictionary} initialBlogs={blogPosts} />;
}
