import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    titleKey: "personal-website",
    descriptionKey: "personal-website-description",
    achievementsKeys: [
      "personal-website-achievement-1",
      "personal-website-achievement-2",
      "personal-website-achievement-3",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    githubUrl: "https://github.com/lcastrof/lucasdecastro.dev",
  },
  // Add more projects here
];
