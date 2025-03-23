import { BlogPost } from "@/types/blog";
import { useLocale } from "next-intl";
import Link from "next/link";

interface PostsListProps {
  posts: BlogPost[];
}

export function PostsList({ posts }: PostsListProps) {
  const locale = useLocale();

  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat(locale, {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(date));
  };

  return (
    <div>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/${locale}/blog/${post.slug}`}
          className="group block"
        >
          <article className="flex items-start justify-between p-4 hover:rounded-lg transition-all duration-300 hover:bg-zinc-800/30 border-b border-zinc-800 hover:border-sky-500/30 hover:shadow-sm hover:shadow-sky-500/5">
            <div className="space-y-1.5 pr-8">
              <h3 className="font-medium text-lg lg:text-xl text-zinc-200 group-hover:text-sky-500 transition-colors duration-300">
                {post.metadata?.title}
              </h3>
              <p className="text-sm lg:text-base text-zinc-400 line-clamp-2">
                {post.metadata?.description}
              </p>
            </div>
            <time className="text-sm text-zinc-400 shrink-0">
              {post.metadata?.date && formatDate(post.metadata.date)}
            </time>
          </article>
        </Link>
      ))}
    </div>
  );
}
