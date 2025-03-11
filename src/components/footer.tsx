import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconLink } from "./icon-link";

const links = [
  { href: "https://github.com/lcastrof", Icon: FaGithub },
  { href: "https://linkedin.com/in/lucas-fernandino", Icon: FaLinkedin },
  { href: "mailto:lucascastrofr@gmail.com", Icon: FaEnvelope },
];

export function Footer() {
  return (
    <footer className="flex w-full justify-center space-x-4">
      {links.map(({ href, Icon }) => (
        <IconLink key={href} href={href}>
          <Icon size={24} />
        </IconLink>
      ))}
    </footer>
  );
}
