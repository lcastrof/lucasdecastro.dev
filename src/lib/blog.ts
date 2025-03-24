import { BlogPost } from "@/types/blog";
import fs from "fs";
import path from "path";

const POSTS_PATH = path.join(process.cwd(), "src", "posts");

export function getBlogPostsSlugs() {
  try {
    const entries = fs.readdirSync(POSTS_PATH);

    return entries
      .filter((entry) => entry.endsWith(".mdx"))
      .map((file) => file.replace(".mdx", ""));
  } catch (error) {
    console.log("Error reading blog posts:", error);
    return [];
  }
}

export function getBlogPosts(): BlogPost[] {
  try {
    const entries = fs.readdirSync(POSTS_PATH);

    const posts = entries
      .filter((entry) => entry.endsWith(".mdx"))
      .map((file) => {
        const slug = file.replace(".mdx", "");
        let metadata: {
          title?: string;
          date?: string;
          description?: string;
        } = {};

        try {
          const pagePath = path.join(POSTS_PATH, file);
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
  } catch (error) {
    console.log("Error reading blog posts:", error);
    return [];
  }
}

export const countBlogPostWords = (postSlug: string) => {
  const pagePath = path.join(POSTS_PATH, `${postSlug}.mdx`);
  const content = fs.readFileSync(pagePath, "utf8");
  const words = content.split(/\s+/);
  return words.length;
};

export const getPost = async (slug: string) => {
  const pagePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const content = fs.readFileSync(pagePath, "utf8");

  const titleMatch = content.match(/title:\s*['"](.+?)['"]/);
  const dateMatch = content.match(/date:\s*['"](.+?)['"]/);
  const descriptionMatch = content.match(
    /description:\s*['"]([\s\S]*?)['"](?=\s*(?:,|\}|$))/
  );

  return {
    title: titleMatch?.[1],
    date: dateMatch?.[1],
    description: descriptionMatch?.[1],
  };
};
