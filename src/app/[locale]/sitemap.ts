import { promises as fs } from "fs";
import path from "path";

async function getPostSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name === "page.mdx")
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, "/"));
}

export default async function sitemap() {
  const postsDirectory = path.join(process.cwd(), "app", "n");
  const slugs = await getPostSlugs(postsDirectory);

  const posts = slugs.map((slug) => ({
    url: `https://lucasdecastro.dev/blog/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["", "/about", "/blog", "/experience", "/projects"].map(
    (route) => ({
      url: `https://lucasdecastro.dev${route}`,
      lastModified: new Date().toISOString(),
    })
  );

  return [...routes, ...posts];
}
