import { ExperienceItem } from "@/types/experience";
import { TimelineItem } from "./timeline-item";

interface TimelineProps {
  experiences: ExperienceItem[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative flex flex-col gap-8">
      {/* Line stops at the center of the first dot */}
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
