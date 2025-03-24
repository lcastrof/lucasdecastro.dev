import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return generatePageMetadata({
    title: "About",
    description:
      "Learn more about me, my background, and experience in software development",
    locale,
    path: "/about",
  });
}

export default function About() {
  const t = useTranslations("About");

  return (
    <PageContainer>
      <PageHeader subtitle={t("subtitle")} />

      <article className="flex flex-col">
        {Array.from({ length: 3 }).map((_, i) => (
          <p key={i}>
            {t.rich(`paragraphs.p${i + 1}`, {
              bold: (children) => <strong>{children}</strong>,
            })}
          </p>
        ))}

        <p>{t("ending-message")}</p>
      </article>
    </PageContainer>
  );
}
