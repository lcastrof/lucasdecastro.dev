import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <section className="flex flex-col gap-2 font-[family-name:var(--font-geist-sans)] flex-full">
      <h2 className="text-6xl text-gray-200">{t("title")}</h2>
      <article className="flex flex-col gap-2">
        <p className="text-xl max-w-prose">{t("p1")}</p>
        <p className="text-xl max-w-prose">{t("p2")}</p>
        <p className="text-xl max-w-prose">{t("p3")}</p>
        <p className="text-xl max-w-prose">{t("p4")}</p>
        <p className="text-xl max-w-prose">{t("ending-message")}</p>
      </article>
    </section>
  );
}
