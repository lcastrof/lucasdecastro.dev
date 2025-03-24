import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { PostsList } from "@/components/posts-list";
import { getBlogPosts } from "@/lib/blog";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata({
    translationNamespace: "blog",
    locale,
    path: "/blog",
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
