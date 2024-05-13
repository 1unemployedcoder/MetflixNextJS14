"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import cl from "./NavLink.module.css";
const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const pathName = usePathname();
  return (
    <Link
      className={ `${cl.link} ${pathName === link.href && cl.linkActive}`}
      key={link.href}
      href={link.href}
    >
      {link.name}
    </Link>
  );
};

export default NavLink;
