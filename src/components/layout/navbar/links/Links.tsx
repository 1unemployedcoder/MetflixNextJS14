import React from "react";
import NavLink from "./navLink/NavLink";
import cl from "./Links.module.css";
import { Button } from "@/components/ui/button/Button";
const Links = () => {
  const links: linkType[] = [
    { href: "/", name: "Home" },
    { href: "/films", name: "Films" },
    { href: "/news", name: "News" },
  ];
  const session = false;
  const isAdmin = false;
  return (
    <div className={cl.links}>
      {links.map((link) => (
        <NavLink key={link.href} link={link} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink link={{ href: "/admin", name: "Admin" }} />}
          <Button>Logout</Button>
        </>
      ) : (
        <NavLink link={{ href: "/login", name: "Login" }} />
      )}
    </div>
  );
};

export default Links;
