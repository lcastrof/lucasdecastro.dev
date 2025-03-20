import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";
import type { ExperienceItem } from "@/types/experience";
import { useLocale, useTranslations } from "next-intl";

const experiences: ExperienceItem[] = [
  {
    id: "1",
    translationKey: "currentRole",
    company: "RD Station",
    companyUrl: "https://rdstation.com",
    startDate: "2024-09-02",
    endDate: "Present",
    technologies: [
      "Node",
      "NestJS",
      "TypeScript",
      "Go",
      "Ruby",
      "GCP",
      "AWS",
      "Vue",
    ],
  },
  {
    id: "2",
    translationKey: "previousRole",
    company: "Raro Labs",
    companyUrl: "https://rarolabs.com.br",
    startDate: "2022-06-02",
    endDate: "2024-08-02",
    technologies: ["Node", "NestJS", "Typescript", "React", "Next.js", "AWS"],
  },
  {
    id: "3",
    translationKey: "firstRole",
    company: "App Masters",
    companyUrl: "https://www.appmasters.io/en",
    startDate: "2021-04-02",
    endDate: "2022-05-02",
    technologies: ["Node", "Typescript", "React", "Next.js", "AWS"],
  },
];

export default function Experience() {
  const locale = useLocale();
  const t = useTranslations("Experience");

  return (
    <PageContainer>
      <PageHeader subtitle={t("subtitle")} />

      <Timeline experiences={experiences} />

      <div className="flex justify-start mt-1">
        <a
          href={`/resume-${locale}.pdf`}
          target="_blank"
          referrerPolicy="no-referrer"
          className="px-4 py-2 text-sm lg:text-base text-zinc-200 border border-zinc-700 rounded-lg
            hover:bg-zinc-800 transition-colors"
        >
          {t("downloadCV")}
        </a>
      </div>
    </PageContainer>
  );
}
