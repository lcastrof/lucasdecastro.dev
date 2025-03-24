import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { PostsList } from "@/components/posts-list";
import { getBlogPosts } from "@/lib/blog";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    translationNamespace: "blog",
    locale: locale,
    path: "/blog",
    type: "page",
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
