import { TypeFilm } from "@/@types/AsyncTypes";
import Image from "next/image";
import cl from "./FilmItem.module.css";

const FilmItem = ({ film }: { film: TypeFilm }) => {
    return (
        <div className={cl.container}>
            <Image
                alt={film.nameRu || film.nameOriginal}
                src={film.posterUrlPreview}
                width={1000}
                height={1000}
                priority
                className={cl.imageAutoSize}
            />
            <div className={cl.exposition}>
                <h2>
                    {film.nameRu || film.nameOriginal} ({film.year}) <span className={cl.rating}>{film.ratingImdb}</span>
                </h2>
                {film.slogan !== null && (
                    <div className={cl.slogan_container}>
            slogan:
                        <p className={cl.slogan}> {film.slogan}</p>
                    </div>
                )}
                {film.shortDescription !== null ? (
                    <div className={cl.description}>
                        <h3 className={cl.title_description}>Synopsis: </h3>
                        {film.shortDescription}
                    </div>
                ) : (
                    <p>
            We havent enough info about this creation, but we certain -
            it&apos;s good.
                    </p>
                )}
            </div>
        </div>
    );
};

export default FilmItem;
