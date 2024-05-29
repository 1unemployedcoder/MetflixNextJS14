import React from 'react';
import EmblaCarousel from "@/components/ui/carousel/EmblaCarousel";
import { TypeFilms } from "@/@types/AsyncTypes";
import cl from "./FilmHome.module.css"
const FilmHome = ({films}: {films: TypeFilms[]}) => {
    return (
        <div className={cl.filmsContainer}>
            <h3>Фильмы сегодня: </h3>
            <EmblaCarousel slides={films} options={{dragFree: true, loop: true}}/>
        </div>
    );
};

export default FilmHome;
