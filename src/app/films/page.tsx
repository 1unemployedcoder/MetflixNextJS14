import React from "react";
import {getFilms} from "@/API/FetchService";
import FilmsPage from "@/components/film/FilmsPage/FilmsPage";

export default async function Page() {
    const films = await getFilms();
    return <FilmsPage films={films} />;
}
