import Link from "next/link";
import cl from "./Navbar.module.css";
import Links from "./links/Links";
export const Navbar = () => {
  return (
    <nav className={cl.container}>
      <Link href={'/'} className={cl.logo}>FilmSearch</Link>
      <Links />
    </nav>
  );
};
