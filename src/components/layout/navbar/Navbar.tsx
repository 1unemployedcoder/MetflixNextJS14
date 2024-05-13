import cl from "./Navbar.module.css";
import Links from "./links/Links";
export const Navbar = () => {
  return (
    <nav className={cl.container}>
      <div className={cl.logo}>Logo</div>
      <Links />
    </nav>
  );
};
