"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex space-x-4">
      <Link href="/">Home Link</Link>
      <Link href="/about">About</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  );
}
