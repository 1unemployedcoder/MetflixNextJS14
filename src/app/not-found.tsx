import { Button } from "@/components/ui/button/Button";
import Link from "next/link";
import cl from "@/styles/NotFound.module.css"

const NotFound = () => {
    return (
        <div className={cl.container}>
            <h2>Not found</h2>
            <p>Sorry, the page are looking not doesn&apos;t exit</p>
            <Button><Link href='/'>Return Home</Link></Button>
        </div>
    );
};

export default NotFound;
