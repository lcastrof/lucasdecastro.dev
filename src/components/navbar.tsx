"use client";

import Image from "next/image";
import Link from "next/link";
import LogoImg from "../../public/assets/images/logo.jpg";
import { NavLink } from "./nav-link";

export function Navbar() {
  return (
    <div className="flex justify-between">
      <Link href="/">
        <Image src={LogoImg} alt="Avatar" width={48} height={48} />
      </Link>
      <nav className="flex space-x-4 mx-auto items-center">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/experience">Experience</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/projects">Projects</NavLink>
      </nav>
    </div>
  );
}
