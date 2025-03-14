"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoImg from "../../public/assets/images/logo.jpg";
import { LanguageSelector } from "./language-selector";
import { NavLink } from "./nav-link";

export function Navbar() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  return (
    <div className="flex justify-between">
      <Link href={`/${currentLocale}`}>
        <Image src={LogoImg} alt="Avatar" width={48} height={48} />
      </Link>
      <nav className="flex space-x-4 mx-auto items-center">
        <NavLink href={`/${currentLocale}/about`}>About</NavLink>
        <NavLink href={`/${currentLocale}/experience`}>Experience</NavLink>
        <NavLink href={`/${currentLocale}/blog`}>Blog</NavLink>
        <NavLink href={`/${currentLocale}/projects`}>Projects</NavLink>
      </nav>
      <LanguageSelector />
    </div>
  );
}
