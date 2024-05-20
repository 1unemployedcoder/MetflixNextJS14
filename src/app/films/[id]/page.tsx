import { TypeFilms } from "@/@types/AsyncTypes";
import { getFilms } from "@/API/FetchService";

export async function generateStaticParams() {
  const films = await getFilms();
  const paths = films.map((film) => ({
    id: film.kinopoiskId.toString(),
  }));

  return paths;
}

const getFilm = async (params: any) => {
	const res = await fetch(
	  `https://kinopoiskapiunofficial.tech/api/v2.2/films/${params.id}`,
	  {
		method: "GET",
		headers: {
		  "X-API-KEY": "11f800ba-3534-408a-a1d1-2c2125702ea8",
		  "Content-Type": "application/json",
		},
	  }
	);
	if (!res.ok) {
	  throw new Error("Failed to fetch data");
	}
	const film = await res.json();
	return film as TypeFilms;
  };
  

const FilmPage = async ({ params }: any) => {
  const film = await getFilm(params);
  return (
    <div>
      Film with id = {film.kinopoiskId}
	  <p>film name - {film.nameOriginal ?? film.nameRu}</p>
      <div>text test</div>
    </div>
  );
};

export default FilmPage;
