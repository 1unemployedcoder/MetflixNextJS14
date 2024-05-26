"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import cl from "./NavLink.module.css";
import { NavLinkProps } from "@/@types/PropsTypes";
import { useMemo } from "react";
const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const pathName = usePathname();
  const result = useMemo(() => {
    const regex = new RegExp(`^${link.href}(/|\\?|$)`);
    return regex.test(pathName)
  }, [pathName, link.href]);
  return (
    <Link
      className={ `${cl.link} ${result && cl.linkActive}`}
      href={link.href}
    >
      {link.name}
    </Link>
  );
};

export default NavLink;
