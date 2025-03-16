"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

const languages = [
  {
    code: "en",
    flag: "/assets/images/flags/us.svg",
    name: "English",
  },
  {
    code: "pt",
    flag: "/assets/images/flags/br.svg",
    name: "Português",
  },
] as const;

export function LanguageSelector() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang =
    languages.find((lang) => pathname.startsWith(`/${lang.code}`))?.code ||
    "en";

  const switchLanguage = (newLocale: string) => {
    const currentLocale = currentLang;
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    router.push(newPath);
  };

  return (
    <div className="relative flex">
      <div className="relative flex items-center group">
        <select
          onChange={(e) => switchLanguage(e.target.value)}
          className="appearance-none bg-transparent border-b border-zinc-700 pr-6 pl-8 py-1.5
            text-sm focus:outline-none focus:border-zinc-500 cursor-pointer hover:border-zinc-500 
            transition-colors"
          aria-label="Select language"
          value={currentLang}
          style={{
            WebkitAppearance: "none",
            MozAppearance: "none",
          }}
        >
          {languages.map((lang) => (
            <option
              key={lang.code}
              value={lang.code}
              className="bg-zinc-900 text-sm"
            >
              {lang.name}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
          <FaChevronDown className="h-3 w-3 text-zinc-400 group-hover:text-zinc-300 transition-colors" />
        </div>

        <div className="pointer-events-none absolute left-1.5 top-1/2 -translate-y-1/2">
          <Image
            src={
              languages.find((lang) => lang.code === currentLang)?.flag ||
              languages[0].flag
            }
            alt=""
            width={18}
            height={18}
            className="rounded-sm"
          />
        </div>
      </div>
    </div>
  );
}
