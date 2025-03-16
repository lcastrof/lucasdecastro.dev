import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { PostsList } from "@/components/posts-list";
import { getBlogPosts } from "@/lib/blog";
import { useTranslations } from "next-intl";

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
