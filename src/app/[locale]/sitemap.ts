import { promises as fs } from "fs";
import path from "path";

async function getPostSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );
      return path.basename(relativePath, ".mdx");
    });
}

const locales = ["en", "pt"];

export default async function sitemap() {
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  const slugs = await getPostSlugs(postsDirectory);

  const posts = locales.flatMap((locale) =>
    slugs.map((slug) => ({
      url: `https://lucasdecastro.dev/${locale}/blog/${slug}`,
      lastModified: new Date().toISOString(),
    }))
  );

  const routes = ["", "/about", "/blog", "/experience", "/projects"];
  const localizedRoutes = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `https://lucasdecastro.dev/${locale}${route}`,
      lastModified: new Date().toISOString(),
    }))
  );

  return [...localizedRoutes, ...posts];
}
