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
    <div className="flex justify-between">
      <Link locale={locale} href={`/${locale}`}>
        <Image src={LogoImg} alt="Avatar" width={48} height={48} />
      </Link>
      <nav className="flex space-x-4 mx-auto items-center">
        <NavLink href={`/${locale}/about`}>{t("about")}</NavLink>
        <NavLink href={`/${locale}/experience`}>{t("experience")}</NavLink>
        <NavLink href={`/${locale}/blog`}>{t("blog")}</NavLink>
        <NavLink href={`/${locale}/projects`}>{t("projects")}</NavLink>
      </nav>
      <LanguageSelector />
    </div>
  );
}
