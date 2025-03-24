import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { PostsList } from "@/components/posts-list";
import { getBlogPosts } from "@/lib/blog";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  return generatePageMetadata({
    translationNamespace: "blog",
    locale: lang,
    path: "/blog",
    ogTitle: "Blog",
  });
}

export default function Blog() {
  const t = useTranslations("Blog");
  const blogPosts = getBlogPosts();

  return (
    <PageContainer>
      <PageHeader subtitle={t("subtitle")} />

      <PostsList posts={blogPosts} />
    </PageContainer>
  );
}
