"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";
import { NavLink } from "./nav-link";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const locale = useLocale();
  const t = useTranslations("Navbar");

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleOverlayClick}
      className={`
        fixed inset-0 w-full h-screen
        bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg
        transform transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-zinc-800 dark:text-zinc-200"
        aria-label="Close menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <nav className="flex flex-col items-center justify-center h-full gap-8 text-lg">
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
