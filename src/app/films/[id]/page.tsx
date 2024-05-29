import {getFilm, getFilms, getReviews} from "@/API/FetchService";
import FilmItem from "@/components/film/FilmItem/FilmItem";
import FilmReviews from "@/components/film/FilmReviews/FilmReviews";

export async function generateStaticParams() {
    const films = await getFilms();
    return films.map((film) => ({
        id: film.kinopoiskId.toString(),
    }));
}

const FilmPage = async ({ params }: any) => {
    const { id } = params;
    const film = await getFilm(id);
    const reviews = await getReviews(id);
    return (
        <div>
            <FilmItem film={film} />
            <FilmReviews reviews={reviews.slice(0, 1)} />
        </div>
    );
};

export default FilmPage;
