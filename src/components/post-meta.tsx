import { useFormatter } from "next-intl";
import { FaCalendarDays, FaClock } from "react-icons/fa6";
import { EstimatedTimeToRead } from "./estimated-time-to-read";

interface PostMetaProps {
  date: string;
  slug: string;
}

export function PostMeta({ date, slug }: PostMetaProps) {
  const format = useFormatter();

  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 opacity-50">
      <div className="flex items-center gap-2">
        <FaCalendarDays className="h-4 w-4" />
        <time dateTime={date}>
          {format.dateTime(new Date(date), {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          })}
        </time>
      </div>
      <div className="flex items-center gap-2">
        <FaClock className="h-4 w-4" />
        <EstimatedTimeToRead slug={slug} />
      </div>
    </div>
  );
}
