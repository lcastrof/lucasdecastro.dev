import { getBlogPostsSlugs } from "@/lib/blog";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/posts/${slug}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  const slugs = getBlogPostsSlugs();
  const locales = ["en", "pt"]; // Add your supported locales

  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export const dynamicParams = false;
