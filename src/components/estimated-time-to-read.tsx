import { countBlogPostWords } from "@/lib/blog";

const estimatedTimeToRead = (wordCount: number) => {
  const wordsPerMinute = 130;
  const minutes = wordCount / wordsPerMinute;
  return Math.ceil(minutes);
};

export function EstimatedTimeToRead({ slug }: { slug: string }) {
  const wordCount = countBlogPostWords(slug);

  return (
    <span className="text-gray-500 text-sm">
      {estimatedTimeToRead(wordCount)} min read
    </span>
  );
}
