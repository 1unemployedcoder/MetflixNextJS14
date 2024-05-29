import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button/Button";
import cl from './FilmsPage.module.css'
import {TypeFilms} from "@/@types/AsyncTypes";

type FilmsPageProps = {
    films: TypeFilms[];
};
const FilmsPage: React.FC<FilmsPageProps> = ({films}) => {
    return (
        <div className={cl.container}>
            <h1>Фильмы</h1>
            <div className={cl.content_container}>
                <div className={cl.grid}>
                    {films.map((film) => (
                        <Link className={cl.card} key={film.kinopoiskId} href={`/films/${film.kinopoiskId}`}>
                            {film.ratingImdb && <div className={cl.rating}>{film.ratingImdb}</div>}
                            <Image width={1000} height={1000} className={cl.image} src={film.posterUrlPreview}
                                alt={film.nameRu}/>
                            <div className={cl.details}>
                                <div className={cl.title}>{film.nameRu || film.nameOriginal}</div>
                                <div className={cl.year}>{film.year}</div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className={cl.sortContainer}>
                    <Button>Сортировка по</Button>
                    <Button>Тип фильма</Button>
                </div>
            </div>
        </div>
    );
};

export default FilmsPage;
