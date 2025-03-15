export interface ExperienceItem {
  id: string;
  translationKey: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate: string | "Present";
  technologies: string[];
}
