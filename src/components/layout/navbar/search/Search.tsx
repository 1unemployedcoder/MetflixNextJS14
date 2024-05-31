"use client";
import React, {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import cl from "./Search.module.css";
import {getSearchedFilm} from "@/API/FetchService";
import Input from "@/components/ui/input/Input";
import {Button} from "@/components/ui/button/Button";
import {useDebounce} from "@/hooks/useDebounce";

const Search = () => {
    const [query, setQuery] = useState("");
    const router = useRouter();
    const debounceQuery = useDebounce(query, 1000)
    const pathname = usePathname()
    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!query) return
        const data = await getSearchedFilm({keyword: query});
        if (data.total) {
            router.push(`/films/${data.items[0].kinopoiskId}`);
        } else {
            router.push(`/notfound`);
        }
        setQuery("");
    };
    const onChangeSolver = () => {
        router.push(`/films?search=${debounceQuery}`);
    }

    useEffect(() => {
        if (pathname === '/films') {
            onChangeSolver()
        }
    }, [debounceQuery]);

    return (
        <>
            {pathname === '/films'
                ?
                <Input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search... &#x1F50D;&#xFE0E;"/>
                :
                <form className={cl.container} onSubmit={handleSearch}>
                    <Input
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Search... &#x1F50D;&#xFE0E;"
                    />
                    <Button type="submit">Lucky!</Button>
                </form>
            }
        </>
    );
};

export default Search;
