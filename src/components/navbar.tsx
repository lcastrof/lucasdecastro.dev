"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "../../public/assets/images/logo.jpg";
import { LanguageSelector } from "./language-selector";
import { NavLink } from "./nav-link";

export function Navbar() {
  const locale = useLocale();
  const t = useTranslations("Navbar");

  return (
    <div className="flex flex-col sm:flex-row justify-between mb-12 gap-6 sm:gap-0">
      <div className="flex justify-between items-center">
        <Link locale={locale} href={`/${locale}`}>
          <Image src={LogoImg} alt="Avatar" width={48} height={48} />
        </Link>
        <div className="sm:hidden">
          <LanguageSelector />
        </div>
      </div>
      <nav className="flex sm:space-x-4 sm:mx-auto items-center justify-between">
        <NavLink href={`/${locale}/about`}>{t("about")}</NavLink>
        <NavLink href={`/${locale}/experience`}>{t("experience")}</NavLink>
        <NavLink href={`/${locale}/blog`}>{t("blog")}</NavLink>
        <NavLink href={`/${locale}/projects`}>{t("projects")}</NavLink>
      </nav>
      <div className="hidden sm:block">
        <LanguageSelector />
      </div>
    </div>
  );
}
