import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Bungee_Shade, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bungeeShade = Bungee_Shade({
  variable: "--font-bungee-shade",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lucasdecastro.dev"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Lucas de Castro",
    template: "%s | Lucas de Castro",
  },
  description: "Software engineer, turning bugs into features.",
};

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
      <body
        className={`${geistMono.variable} ${bungeeShade.variable} antialiased font-mono`}
      >
        <NextIntlClientProvider>
          <div className="max-w-4xl mx-auto px-8 py-8 min-h-screen flex flex-col gap-4 lg:text-lg">
            <Header />
            <main className="flex flex-auto pt-22">{children} </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
