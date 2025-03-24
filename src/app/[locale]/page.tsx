import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  return generatePageMetadata({
    translationNamespace: "home",
    locale: lang,
    path: "",
    type: "home",
  });
}

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col gap-2 justify-center font-[family-name:var(--font-geist-sans)] flex-full">
      <div>
        <h1 className="text-6xl text-gray-200">Lucas de Castro</h1>
        <p className="text-4xl text-gray-500">{t("job-title")}</p>
      </div>
      <p className="text-xl max-w-prose">
        {t.rich("description", {
          a: (children) => (
            <a
              className="text-sky-500 hover:underline"
              target="_blank"
              referrerPolicy="no-referrer"
              href="https://rdstation.com/"
            >
              {children}
            </a>
          ),
        })}
      </p>
    </div>
  );
}
