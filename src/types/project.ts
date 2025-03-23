export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  achievementsKeys?: string[];
  technologies: string[];
  githubUrl: string;
}
