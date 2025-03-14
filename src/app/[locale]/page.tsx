import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col gap-2 justify-center font-[family-name:var(--font-geist-sans)] flex-full">
      <div>
        <h1 className="text-6xl text-gray-200">Lucas de Castro</h1>
        <h2 className="text-4xl text-gray-500">{t("job-title")}</h2>
      </div>
      <p className="text-xl max-w-prose">
        {t("description")}{" "}
        <a href="https://www.rdstation.com" className="text-purple-400">
          RD Station
        </a>
        .
      </p>
    </div>
  );
}
