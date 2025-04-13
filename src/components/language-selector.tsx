"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageSelector() {
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1];

  const switchPath = (newLocale: string) => {
    return pathname === "/" || pathname === "/en"
      ? `/${newLocale}`
      : pathname.replace(`/${currentLang}`, `/${newLocale}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Link
        href={switchPath("en")}
        className={`text-sm ${
          !currentLang || currentLang === "en"
            ? "text-zinc-100"
            : "text-zinc-400 hover:text-zinc-300"
        } transition-colors`}
      >
        EN
      </Link>
      <span className="text-zinc-600">/</span>
      <Link
        href={switchPath("pt")}
        className={`text-sm ${
          currentLang === "pt"
            ? "text-zinc-100"
            : "text-zinc-400 hover:text-zinc-300"
        } transition-colors`}
      >
        PT
      </Link>
    </div>
  );
}
