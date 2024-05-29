import { TypeFilms, TypeNews } from "@/@types/AsyncTypes";
import { getFilms, getNews } from "@/API/FetchService";
import NewsList from "@/components/news/NewsList/NewsList";
import FilmHome from "@/components/film/FilmHome/FilmHome";
const Home = async () => {
    const newsData = getNews()
    const filmsData = getFilms()
    const [news, films]: [TypeNews[], TypeFilms[]] = await Promise.all([newsData, filmsData])
    return (
        <>
            <NewsList news={news} />
            <FilmHome films={films} />
        </>
    );
};

export default Home;
