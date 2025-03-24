import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    translationNamespace: "about",
    locale: locale,
    path: "/about",
    type: "page",
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
