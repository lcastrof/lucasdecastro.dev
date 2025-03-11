type IconLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function IconLink({ href, children }: IconLinkProps) {
  return (
    <a
      className="text-gray-400 opacity-60 hover:opacity-100 transition"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
