"use client"
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { TypeFilms } from "@/@types/AsyncTypes";
import cl from "./Embla.module.css"

type PropType = {
    slides: TypeFilms[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    return (
        <div className={cl.embla}>
            <div className={cl.embla__viewport} ref={emblaRef}>
                <div className={cl.embla__container}>
                    {slides.map((film) => (
                        <div className={cl.embla__slide} key={film.kinopoiskId}>
                            <div className={cl.embla__slide__number}>{film.nameRu || film.nameOriginal}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
