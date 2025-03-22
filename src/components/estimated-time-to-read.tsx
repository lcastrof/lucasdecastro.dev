import { countBlogPostWords } from "@/lib/blog";
import { useTranslations } from "next-intl";

const estimatedTimeToRead = (wordCount: number) => {
  const wordsPerMinute = 130;
  const minutes = wordCount / wordsPerMinute;
  return Math.ceil(minutes);
};

export function EstimatedTimeToRead({ slug }: { slug: string }) {
  const t = useTranslations("Blog");
  const wordCount = countBlogPostWords(slug);
  const minutes = estimatedTimeToRead(wordCount);

  return (
    <span>
      {minutes} {t("minutes-to-read")}
    </span>
  );
}
