"use client";

import { ExperienceItem } from "@/types/experience";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Tag } from "./tag";

interface TimelineItemProps {
  experience: ExperienceItem;
  isLatest?: boolean;
}

const formatDate = (date: string, locale: string) => {
  const parsedDate = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
  }).format(new Date(date));

  return parsedDate.charAt(0).toUpperCase() + parsedDate.slice(1);
};

export function TimelineItem({
  experience,
  isLatest = false,
}: TimelineItemProps) {
  const locale = useLocale();
  const t = useTranslations("Experience");

  return (
    <div className="flex gap-4">
      <div className="relative z-10 mt-[22px]">
        <div
          className={`w-4 h-4 rounded-full transition-colors ${
            isLatest ? "border-2 border-zinc-400 bg-transparent" : "bg-zinc-400"
          }`}
        />
      </div>

      <Link
        href={experience.companyUrl}
        target="_blank"
        className="flex-1 p-4 rounded-lg border border-transparent transition-all duration-200 
          hover:border-zinc-700/50 hover:bg-zinc-800/30"
      >
        <h3 className="text-xl font-medium text-zinc-100">
          {t(`roles.${experience.translationKey}.title`)}
        </h3>
        <p className="text-sm lg:text-base text-zinc-400">
          {experience.company} • {formatDate(experience.startDate, locale)} -{" "}
          {experience.endDate === "Present"
            ? t("present")
            : formatDate(experience.endDate, locale)}
        </p>
        <p className="mt-2 text-zinc-300">
          {t(`roles.${experience.translationKey}.description`)}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {experience.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </Link>
    </div>
  );
}
