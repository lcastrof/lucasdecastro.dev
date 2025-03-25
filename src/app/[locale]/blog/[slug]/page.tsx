import { getBlogPostsSlugs, getPost } from "@/lib/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  try {
    const post = await getPost(slug);

    return {
      title: post.title,
      description: post.description,
      alternates: {
        canonical: `/${locale}/blog/${slug}`,
        languages: {
          en: `/en/blog/${slug}`,
          pt: `/pt/blog/${slug}`,
        },
      },
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        publishedTime: post.date,
        authors: ["Lucas de Castro"],
        url: `https://lucasdecastro.dev/${locale}/blog/${slug}`,
        locale: locale === "en" ? "en_US" : "pt_BR",
        siteName: "Lucas de Castro",
        images: [
          {
            url: `https://lucasdecastro.dev/og?type=blog&title=${encodeURIComponent(
              post.title || ""
            )}`,
            width: 1200,
            height: 600,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
      },
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { default: Post } = await import(`@/posts/${slug}.mdx`);
    return <Post />;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }
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
