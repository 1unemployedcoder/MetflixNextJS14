import { getFilm, getFilms, getReviews } from "@/API/FetchService";
import FilmItem from "@/components/film/FilmItem";
import FilmReviews from "@/components/film/FilmReviews";

export async function generateStaticParams() {
  const films = await getFilms();
  const paths = films.map((film) => ({
    id: film.kinopoiskId.toString(),
  }));

  return paths;
}

const FilmPage = async ({ params }: any) => {
  const { id } = params;
  const film = await getFilm(id);
  const reviews = await getReviews(id);
  return (
    <div>
      <FilmItem film={film} />
      <FilmReviews reviews={reviews} />
    </div>
  );
};

export default FilmPage;
