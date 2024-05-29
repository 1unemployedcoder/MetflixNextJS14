import React from "react";
import cl from "./p.module.css";
import {TypeFilm} from "@/@types/AsyncTypes";
import {Button} from "@/components/ui/button/Button";


const films: TypeFilm[] = [
    {
        kinopoiskId: 1,
        nameRu: "Фильм 1",
        year: 2022,
        posterUrlPreview: "https://via.placeholder.com/200x300",
        ratingImdb: 4.5,
        slogan: "",
        shortDescription: "",
        imdbId: "",
        nameOriginal: ""
    },    {
        kinopoiskId: 1,
        nameRu: "Фильм 1",
        year: 2022,
        posterUrlPreview: "https://via.placeholder.com/200x300",
        ratingImdb: 4.5,
        slogan: "",
        shortDescription: "",
        imdbId: "",
        nameOriginal: ""
    },    {
        kinopoiskId: 1,
        nameRu: "Фильм 1",
        year: 2022,
        posterUrlPreview: "https://via.placeholder.com/200x300",
        ratingImdb: 4.5,
        slogan: "",
        shortDescription: "",
        imdbId: "",
        nameOriginal: ""
    },    {
        kinopoiskId: 1,
        nameRu: "Фильм 1",
        year: 2022,
        posterUrlPreview: "https://via.placeholder.com/200x300",
        ratingImdb: 4.5,
        slogan: "",
        shortDescription: "",
        imdbId: "",
        nameOriginal: ""
    },    {
        kinopoiskId: 1,
        nameRu: "Фильм 1",
        year: 2022,
        posterUrlPreview: "https://via.placeholder.com/200x300",
        ratingImdb: 4.5,
        slogan: "",
        shortDescription: "",
        imdbId: "",
        nameOriginal: ""
    },
];

const FilmsPage: React.FC = () => {
    return (
        <div className={cl.container}>
            <h1>Фильмы</h1>
            <div className={cl.content_container}>
                <div className={cl.grid}>
                    {films.map((film) => (
                        <div className={cl.card} key={film.kinopoiskId}>
                            <div className={cl.rating}>{film.ratingImdb}</div>
                            <img className={cl.image} src={film.posterUrlPreview} alt={film.nameRu}/>
                            <div className={cl.details}>
                                <div className={cl.title}>{film.nameRu}</div>
                                <div className={cl.year}>{film.year}</div>
                                <div className={cl.buttonContainer}>
                                    <Button>Открыть фильм</Button>
                                </div>
                            </div>
                        </div>
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
