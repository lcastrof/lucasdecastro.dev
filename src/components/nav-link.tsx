import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  const isSelected = path.includes(href);

  return (
    <Link href={href} prefetch={true} className="relative group">
      <span
        className={`before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-gray-200 before:transition-transform before:duration-300 before:ease-in-out ${
          isSelected
            ? "before:scale-x-100 opacity-100"
            : "before:scale-x-0 opacity-70"
        } group-hover:before:scale-x-100`}
      >
        {children}
      </span>
    </Link>
  );
}
