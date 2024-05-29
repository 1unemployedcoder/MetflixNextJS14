"use client"
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { TypeFilms } from "@/@types/AsyncTypes";
import cl from "./Embla.module.css"
import { Button } from "@/components/ui/button/Button";
import Link from "next/link";

type PropType = {
    slides: TypeFilms[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({delay: 3000})])

    return (
        <div className={cl.embla}>
            <div className={cl.embla__viewport} ref={emblaRef}>
                <div className={cl.embla__container}>
                    {slides.map((film) => (
                        <div className={cl.embla__slide} key={film.kinopoiskId}>
                            <div className={cl.embla__slide__number}  style={{backgroundImage: `url(${film.posterUrlPreview})`}} >
                                <p className={cl.embla__slide__title}>{film.nameRu || film.nameOriginal}</p>
                                <Button><Link href={`/films/${film.kinopoiskId}`}>Открыть</Link></Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
