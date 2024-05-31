import React from "react";
import NavLink from "./navLink/NavLink";
import cl from "./Links.module.css";
const Links = () => {
    const links: linkType[] = [
        { href: "/", name: "Home" },
        { href: "/films", name: "Films" },
    ];
    return (
        <div className={cl.links}>
            {links.map((link) => (
                <NavLink key={link.href} link={link} />
            ))}
        </div>
    );
};

export default Links;
