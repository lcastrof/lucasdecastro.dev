import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata({
    title: "Projects",
    description: "Explore my portfolio of software development projects.",
    locale,
    path: "/projects",
  });
}

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <PageContainer>
      <PageHeader subtitle={t("subtitle")} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PageContainer>
  );
}
