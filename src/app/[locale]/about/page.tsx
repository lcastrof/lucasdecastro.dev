import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  return generatePageMetadata({
    translationNamespace: "about",
    locale: lang,
    path: "/about",
    ogTitle: "About",
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
