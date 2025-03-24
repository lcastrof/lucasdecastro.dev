import { Metadata } from "next";

interface GenerateMetadataProps {
  title: string;
  description: string;
  locale: string;
  path: string;
}

export function generatePageMetadata({
  title,
  description,
  locale,
  path,
}: GenerateMetadataProps): Metadata {
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
      title,
      description,
      url: `/${locale}${path}`,
    },
  };
}
