import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

export default async function middleware(request: NextRequest) {
  // Keep locale detection, but check for user preference first
  const preferredLocale = request.cookies.get("preferred-locale");

  const handleI18nRouting = createMiddleware({
    ...routing,
    defaultLocale:
      (preferredLocale?.value as "en" | "pt") || routing.defaultLocale,
    localeDetection: false,
  });

  return handleI18nRouting(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
