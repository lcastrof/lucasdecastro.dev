"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LogoImg from "../../public/assets/images/logo.jpg";
import { LanguageSelector } from "./language-selector";
import { MobileMenu } from "./mobile-menu";
import { NavLink } from "./nav-link";

export function Navbar() {
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        ${!isScrolled ? "mt-4" : ""}
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "bg-white/30 backdrop-blur-lg shadow-lg dark:bg-zinc-900/30 h-16"
            : "bg-transparent h-20"
        }
      `}
    >
      <div
        className={`
          max-w-4xl mx-auto px-4 sm:px-8 h-full
          flex items-center justify-between
          transition-all duration-300 ease-in-out
        `}
      >
        <Link locale={locale} href={`/${locale}`}>
          <Image
            src={LogoImg}
            alt="Avatar"
            width={isScrolled ? 40 : 48}
            height={isScrolled ? 40 : 48}
            className="transition-all duration-300 ease-in-out rounded-full"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 mx-auto items-center">
          <NavLink href={`/${locale}/about`}>{t("about")}</NavLink>
          <NavLink href={`/${locale}/experience`}>{t("experience")}</NavLink>
          <NavLink href={`/${locale}/blog`}>{t("blog")}</NavLink>
          <NavLink href={`/${locale}/projects`}>{t("projects")}</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSelector />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`
                block h-0.5 w-full bg-zinc-800 dark:bg-zinc-200 transition-all duration-300
                ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}
              `}
              />
              <span
                className={`
                block h-0.5 w-full bg-zinc-800 dark:bg-zinc-200 transition-all duration-300
                ${isMobileMenuOpen ? "opacity-0" : ""}
              `}
              />
              <span
                className={`
                block h-0.5 w-full bg-zinc-800 dark:bg-zinc-200 transition-all duration-300
                ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}
              `}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
