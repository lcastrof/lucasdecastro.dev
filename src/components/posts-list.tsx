import { BlogPost } from "@/types/blog";
import { useLocale } from "next-intl";
import Link from "next/link";

interface PostsListProps {
  posts: BlogPost[];
}

export function PostsList({ posts }: PostsListProps) {
  const locale = useLocale();
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.metadata?.date || "").getUTCFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, BlogPost[]>);

  const years = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat(locale, {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(date));
  };

  return (
    <div className="space-y-16">
      {years.map((year) => (
        <section key={year} className="relative">
          <div className="sticky top-24 float-left w-16 -ml-26 hidden lg:block">
            <h2 className="text-6xl opacity-15 text-zinc-800 dark:text-zinc-200 font-bungee-shade">
              {year}
            </h2>
          </div>
          <div className="lg:ml-4">
            <h2 className="text-4xl opacity-40 text-zinc-800 dark:text-zinc-200 mb-2 lg:hidden font-bungee-shade">
              {year}
            </h2>
            <div className="space-y-1">
              {postsByYear[year].map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="flex items-start justify-between p-4 rounded-lg transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="space-y-1.5 pr-8">
                      <h3 className="font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-blue-500 transition-colors">
                        {post.metadata?.title}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                        {post.metadata?.description}
                      </p>
                    </div>
                    <time className="text-sm text-zinc-500 dark:text-zinc-400 shrink-0">
                      {post.metadata?.date && formatDate(post.metadata.date)}
                    </time>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
