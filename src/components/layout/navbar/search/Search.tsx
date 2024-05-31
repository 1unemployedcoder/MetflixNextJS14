"use client";
import React, {Suspense, useEffect, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import cl from "./Search.module.css";
import {getSearchedFilm} from "@/API/FetchService";
import Input from "@/components/ui/input/Input";
import {Button} from "@/components/ui/button/Button";
import {useDebounce} from "@/hooks/useDebounce";
import Loading from "@/app/loading";

const Search = () => {
    const searchParams = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('search')?.toString() || '');
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
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('search', debounceQuery);
        router.push(`/films?${newParams.toString()}`);
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

export function Searchbar() {
    return (
        <Suspense fallback={<Loading />}>
            <Search />
        </Suspense>
    )
}
