import Link from "next/link";
import cl from "./Navbar.module.css";
import Links from "./links/Links";
import {Searchbar} from "@/components/layout/navbar/search/Search";

export const Navbar = () => {
    return (
        <nav className={cl.container}>
            <Link href={'/'} className={cl.logo}>Metflix</Link>
            <Searchbar />
            <Links />
        </nav>
    );
};
