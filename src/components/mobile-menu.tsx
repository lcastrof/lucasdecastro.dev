"use client";

import { useLocale, useTranslations } from "next-intl";
import { NavLink } from "./nav-link";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const locale = useLocale();
  const t = useTranslations("Navbar");

  return (
    <div
      className={`
        fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <div className="absolute inset-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg" />
      <nav className="relative flex flex-col items-center justify-center h-full space-y-8">
        <NavLink href={`/${locale}/about`} onClick={onClose}>
          {t("about")}
        </NavLink>
        <NavLink href={`/${locale}/experience`} onClick={onClose}>
          {t("experience")}
        </NavLink>
        <NavLink href={`/${locale}/blog`} onClick={onClose}>
          {t("blog")}
        </NavLink>
        <NavLink href={`/${locale}/projects`} onClick={onClose}>
          {t("projects")}
        </NavLink>
      </nav>
    </div>
  );
}
