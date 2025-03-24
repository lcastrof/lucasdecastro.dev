import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface GeneratePageMetadataProps {
  translationNamespace: string;
  locale: string;
  path: string;
}

export async function generatePageMetadata({
  translationNamespace,
  locale,
  path,
}: GeneratePageMetadataProps): Promise<Metadata> {
  const t = await getTranslations(`metadata.${translationNamespace}`);

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        en: `/en${path}`,
        pt: `/pt${path}`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}${path}`,
    },
  };
}
