import { BlogPost } from "@/types/blog";
import fs from "fs";
import path from "path";

const BLOG_PATH = path.join(process.cwd(), "src", "app", "[locale]", "blog");

export function getBlogPosts(): BlogPost[] {
  const entries = fs.readdirSync(BLOG_PATH, { withFileTypes: true });

  const posts = entries
    .filter((entry) => entry.isDirectory())
    .map((dir) => {
      const slug = dir.name;
      let metadata: {
        title?: string;
        date?: string;
        description?: string;
      } = {};

      try {
        const pagePath = path.join(BLOG_PATH, slug, "page.mdx");
        const content = fs.readFileSync(pagePath, "utf8");

        const titleMatch = content.match(/title:\s*['"](.+?)['"]/);
        const dateMatch = content.match(/date:\s*['"](.+?)['"]/);
        const descriptionMatch = content.match(
          /description:\s*['"]([\s\S]*?)['"](?=\s*(?:,|\}|$))/
        );

        metadata = {
          title: titleMatch?.[1],
          date: dateMatch?.[1],
          description: descriptionMatch?.[1],
        };
      } catch (error) {
        console.log(`Error reading metadata for ${slug}: ${error}`);
      }

      return {
        slug,
        metadata,
      };
    })
    .sort((a, b) => {
      if (!a.metadata?.date || !b.metadata?.date) return 0;
      return (
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime()
      );
    });

  return posts;
}

export const countBlogPostWords = (postSlug: string) => {
  const pagePath = path.join(BLOG_PATH, postSlug, "page.mdx");
  const content = fs.readFileSync(pagePath, "utf8");
  const words = content.split(/\s+/);
  return words.length;
};
