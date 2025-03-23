import { ExperienceItem } from "@/types/experience";

export const experiences: ExperienceItem[] = [
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
