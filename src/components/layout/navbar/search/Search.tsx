"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import cl from "./Search.module.css";
import { getSearchedFilm } from "@/API/FetchService";
import Input from "@/components/ui/input/Input";
import { Button } from "@/components/ui/button/Button";
const Search = () => {
    const [query, setQuery] = useState("");
    const router = useRouter();
    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = await getSearchedFilm(query);
        if (data.total) {
            router.push(`/films/${data.items[0].kinopoiskId}`);
        } else {
            router.push(`/notfound`);
        }
        setQuery("");
    };

    return (
        <form className={cl.container} onSubmit={handleSearch}>
            <Input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search... &#x1F50D;&#xFE0E;"
            />
            <Button type="submit">Lucky!</Button>
        </form>
    );
};

export default Search;
