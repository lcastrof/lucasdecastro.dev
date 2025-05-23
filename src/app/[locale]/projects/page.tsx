import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    translationNamespace: "projects",
    locale,
    path: "/projects",
    ogTitle: "Projects",
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
