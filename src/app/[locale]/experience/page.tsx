import { PageContainer } from "@/components/page-container";
import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";
import { useLocale, useTranslations } from "next-intl";

export default function Experience() {
  const locale = useLocale();
  const t = useTranslations("Experience");

  return (
    <PageContainer>
      <PageHeader subtitle={t("subtitle")} />

      <Timeline />

      <div className="flex justify-start mt-1">
        <a
          href={`/resume-${locale}.pdf`}
          target="_blank"
          referrerPolicy="no-referrer"
          className="px-4 py-2 text-sm lg:text-base text-zinc-200 border border-zinc-700 rounded-lg
            hover:bg-zinc-800 transition-colors"
        >
          {t("downloadCV")}
        </a>
      </div>
    </PageContainer>
  );
}
