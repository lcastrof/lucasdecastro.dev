import { BlogPost } from "@/types/blog";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { LuFlame } from "react-icons/lu";

interface PostsListProps {
  posts: BlogPost[];
}

export function PostsList({ posts }: PostsListProps) {
  const locale = useLocale();
  const t = useTranslations("Blog");

  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat(locale, {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(date));
  };

  // for now, say it is under construction
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="relative">
          <LuFlame className="w-12 h-12 text-sky-500" />
          <div className="absolute inset-0 blur-xl bg-sky-500/20 animate-pulse" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-medium text-zinc-100">
            {t("under-construction")}
          </h2>
          <p className="text-zinc-400 max-w-[500px]">{t("cooking-articles")}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {posts.map((post) => (
        <Link
          prefetch={true}
          key={post.slug}
          href={`/${locale}/blog/${post.slug}`}
          className="group block"
        >
          <article className="flex flex-col items-start justify-between p-4 hover:rounded-lg transition-all duration-300 hover:bg-zinc-800/30 border-b border-zinc-800 hover:border-sky-500/30 hover:shadow-sm hover:shadow-sky-500/5">
            <div className="space-y-1.5 w-full flex justify-between align-top">
              <h3 className="font-medium text-lg lg:text-xl text-zinc-100 group-hover:text-sky-500 transition-colors duration-300">
                {post.metadata?.title}
              </h3>
              <time className="text-sm text-zinc-400 shrink-0">
                {post.metadata?.date && formatDate(post.metadata.date)}
              </time>
            </div>
            <p className="text-sm lg:text-base text-zinc-300 line-clamp-2">
              {post.metadata?.description}
            </p>
          </article>
        </Link>
      ))}
    </div>
  );
}
