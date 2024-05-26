import Link from "next/link";
import cl from "./Navbar.module.css";
import Links from "./links/Links";
import Input from "@/components/ui/input/Input";

export const Navbar = () => {
  return (
    <nav className={cl.container}>
      <Link href={'/'} className={cl.logo}>Metflix</Link>
      <Input placeholder="Search... &#x1F50D;&#xFE0E;" />
      <Links />
    </nav>
  );
};
