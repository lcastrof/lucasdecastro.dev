import { experiences } from "@/data/experiences";
import { TimelineItem } from "./timeline-item";

export function Timeline() {
  return (
    <div className="relative flex flex-col gap-8">
      <div className="absolute left-[7px] top-[38px] bottom-2 w-0.5 bg-zinc-400" />

      {experiences.map((experience, index) => (
        <TimelineItem
          key={experience.id}
          experience={experience}
          isLatest={index === 0}
        />
      ))}
    </div>
  );
}
