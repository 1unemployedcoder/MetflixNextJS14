import React from 'react';
import Link from "next/link";
import Image from "next/image";
import cl from './FilmsPage.module.css';
import { TypeFilms } from "@/@types/AsyncTypes";
import FilmFilter from "@/components/film/FilmsPage/FilmFilter/FilmFilter";

type FilmsPageProps = {
    films: TypeFilms[];
    sort: string;
    type: string;
};

const FilmsPage: React.FC<FilmsPageProps> = ({ films, sort, type }) => {
    return (
        <div className={cl.container}>
            <h1>Фильмы</h1>
            <div className={cl.content_container}>
                <div className={cl.grid}>
                    {films.map((film) => (
                        <Link className={cl.card} key={film.kinopoiskId} href={`/films/${film.kinopoiskId}`}>
                            {film.ratingImdb && <div className={cl.rating}>{film.ratingImdb}</div>}
                            <Image alt={film.nameOriginal || film.nameRu} width={1000} height={1000} className={cl.image} src={film.posterUrlPreview} />
                            <div className={cl.details}>
                                <div className={cl.title}>{film.nameRu || film.nameOriginal}</div>
                                <div className={cl.year}>{film.year}</div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className={cl.sortContainer}>
                    <FilmFilter sort={sort} type={type} />
                </div>
            </div>
        </div>
    );
};

export default FilmsPage;
