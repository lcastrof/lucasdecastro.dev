"use client";

import { type Project } from "@/types/project";
import { useTranslations } from "next-intl";
import Link from "next/link";

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
      className="block p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 group hover:shadow-md dark:hover:shadow-zinc-900/30"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text- accent-indigo-400 dark:group-hover:text-indigo-400 transition-colors">
          {t("projects." + project.titleKey)}
        </h2>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {t("projects." + project.descriptionKey)}
        </p>

        {project.achievementsKeys && project.achievementsKeys.length > 0 && (
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("key-achievements")}
            </h3>
            <ul className="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400 space-y-2 marker:text-gray-400 dark:marker:text-gray-600">
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
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 transition-colors group-hover:bg-gray-200 dark:group-hover:bg-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
