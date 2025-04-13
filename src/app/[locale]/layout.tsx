import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "./globals.css";

export const dynamic = "force-static";
export const revalidate = false;
export const fetchCache = "force-cache";
export const runtime = "nodejs";
export const preferredRegion = "home";
export const maxDuration = 8; // seconds

type Params = Promise<{ locale: string }>;

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await props.params;
  return {
    metadataBase: new URL("https://lucasdecastro.dev"),
    title: {
      default: "Lucas de Castro",
      template: "%s | Lucas de Castro",
    },
    description: "Software Engineer, transforming bugs into features.",
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "pt_BR",
      url: `https://lucasdecastro.dev/${locale}`,
      siteName: "Lucas de Castro",
      images: [
        {
          url: "/og-image.png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        pt: "/pt",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${geistMono.variable}  antialiased font-mono`}>
        <NextIntlClientProvider>
          <div className="max-w-4xl mx-auto px-8 py-8 min-h-screen flex flex-col gap-4 lg:text-lg">
            <Header />
            <main className="flex flex-auto">{children} </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
