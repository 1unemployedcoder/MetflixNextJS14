import { TypeFilms, TypeNews } from "@/@types/AsyncTypes";
import { getFilms, getNews } from "@/API/FetchService";
import NewsList from "@/components/news/NewsList/NewsList";
import FilmHome from "@/components/film/FilmHome/FilmHome";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Metflix | Home',
    description: 'Metflix films and news',
}

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
