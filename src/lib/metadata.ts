import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface GeneratePageMetadataProps {
  translationNamespace: string;
  locale: string;
  path: string;
  type?: "home" | "page" | "blog";
  ogTitle?: string;
}

export async function generatePageMetadata({
  translationNamespace,
  locale,
  path,
  type = "page",
  ogTitle,
}: GeneratePageMetadataProps): Promise<Metadata> {
  const t = await getTranslations(`metadata.${translationNamespace}`);
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        en: `/en${path}`,
        pt: `/pt${path}`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "pt_BR",
      url: `https://lucasdecastro.dev/${locale}${path}`,
      siteName: "Lucas de Castro",
      title,
      description,
      images: [
        {
          url: `https://lucasdecastro.dev/og?type=${type}${
            ogTitle ? `&title=${encodeURIComponent(ogTitle)}` : ""
          }`,
          width: 1200,
          height: 600,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
    other: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  };
}
