import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
  ...routing,
  localePrefix: "as-needed",
  defaultLocale: routing.defaultLocale,
  locales: routing.locales,
});

export const config = {
  // Matcher entries have to start with '/'
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
