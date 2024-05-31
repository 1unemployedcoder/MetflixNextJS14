'use client'
import Select from "@/components/ui/select/Select";
import {useRouter, useSearchParams} from "next/navigation";
import React from "react";

type FilterProps = {
    sort: string;
    type: string;
};
const FilmFilter: React.FC<FilterProps> = ({sort, type}) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSortChange = (value: string) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('sort', value);
        router.push(`/films?${newParams.toString()}`);
    };

    const handleTypeChange = (value: string) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('type', value);
        router.push(`/films?${newParams.toString()}`);
    };
    return (
        <>
            <Select
                defaultName={"Sort by"}
                options={[
                    { value: 'RATING', name: 'By rate' },
                    { value: 'NUM_VOTE', name: 'By votes' },
                    { value: 'YEAR', name: 'By year' },
                ]}
                onChange={handleSortChange}
                value={sort}
                defaultValue={'RATING'}
            />
            <Select
                defaultName={"Film type"}
                options={[
                    { value: 'FILM', name: 'Film' },
                    { value: 'TV_SHOW', name: 'TV show' },
                    { value: 'TV_SERIES', name: 'TV series' },
                    { value: 'MINI_SERIES', name: 'Mini series' },
                    { value: 'ALL', name: 'All' },
                ]}
                onChange={handleTypeChange}
                value={type}
                defaultValue={'ALL'}
            />
        </>
    );
};

export default FilmFilter;
