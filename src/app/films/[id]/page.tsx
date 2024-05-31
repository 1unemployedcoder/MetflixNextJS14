import {getFilm, getFilms, getReviews} from "@/API/FetchService";
import FilmItem from "@/components/film/FilmItem/FilmItem";
import FilmReviews from "@/components/film/FilmReviews/FilmReviews";
import {Metadata} from "next";

interface params {
    params: { id: number }
}

export async function generateStaticParams() {
    const films = await getFilms();
    return films.map((film) => ({
        id: film.kinopoiskId.toString(),
    }));
}

export async function generateMetadata(
    {params}: params,
): Promise<Metadata> {
    const id = params.id
    const product = await getFilm(id);
    const title = product.nameOriginal || product.nameRu
    return {
        title
    }
}

const FilmPage = async ({params}: params) => {
    const {id} = params;
    const film = await getFilm(id);
    const reviews = await getReviews(id);
    return (
        <div>
            <FilmItem film={film}/>
            <FilmReviews reviews={reviews.slice(0, 1)}/>
        </div>
    );
};

export default FilmPage;
