import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    translationNamespace: "home",
    locale: locale,
    path: "",
    type: "home",
  });
}

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col gap-2 justify-center font-[family-name:var(--font-geist-sans)] flex-full">
      <div className="relative">
        <div className="absolute inset-0 blur-3xl bg-sky-500/10 animate-pulse rounded-full" />
        <div className="relative">
          <h1 className="md:text-6xl text-4xl text-slate-100 relative">
            Lucas de Castro
          </h1>
          <p className="md:text-4xl text-2xl text-slate-400">
            {t("job-title")}
          </p>
        </div>
      </div>
      <p className="md:text-xl text-lg max-w-prose relative">
        {t.rich("description", {
          a: (children) => (
            <a
              className="text-sky-500 hover:underline relative"
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
