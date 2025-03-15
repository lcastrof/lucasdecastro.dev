import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <PageContainer>
      <PageHeader subtitle={t("subtitle")} />

      <article className="flex flex-col gap-2 text-lg">
        {Array.from({ length: 4 }).map((_, i) => (
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
