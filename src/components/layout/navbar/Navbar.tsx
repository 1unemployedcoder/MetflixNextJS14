import Link from "next/link";
import cl from './Navbar.module.css'
export const Navbar = () => {
  return (
    <nav className={cl.container}>
      <div className={cl.logo}>Logo</div>
      <div className={cl.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};
