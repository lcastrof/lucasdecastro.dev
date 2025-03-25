"use client";

import { type Project } from "@/types/project";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Tag } from "./tag";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("Projects");

  return (
    <Link
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-lg border border-zinc-800 hover:bg-zinc-800/30 transition-all duration-300 group hover:border-sky-500/30 hover:shadow-md hover:shadow-sky-500/5"
    >
      <div className="flex flex-col gap-4">
        <header className="flex items-center justify-between text-zinc-100 transition-colors group-hover:text-sky-500">
          <h2 className="text-2xl font-semibold">
            {t("projects." + project.titleKey)}
          </h2>
          <FaArrowUpRightFromSquare />
        </header>

        <p className="text-zinc-300/90 leading-relaxed">
          {t("projects." + project.descriptionKey)}
        </p>

        {project.achievementsKeys && project.achievementsKeys.length > 0 && (
          <div className="space-y-3 pt-2">
            <h3 className="font-medium">{t("key-achievements")}</h3>
            <ul className="list-disc pl-4 text-zinc-300/90 space-y-2 marker:text-sky-500">
              {project.achievementsKeys.map((achievementKey) => (
                <li key={achievementKey} className="pl-2">
                  {t("projects." + achievementKey)}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
