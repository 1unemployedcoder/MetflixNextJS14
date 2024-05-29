import { TypeFilms, TypeNews } from "@/@types/AsyncTypes";
import cl from "./HomePage.module.css";
import { getFilms, getNews } from "@/API/FetchService";
import NewsList from "@/components/news/NewsList/NewsList";
import FilmHome from "@/components/film/FilmHome/FilmHome";
const Home = async () => {
    const newsData = getNews()
    const filmsData = getFilms()
    const [news, films]: [TypeNews[], TypeFilms[]] = await Promise.all([newsData, filmsData])
    return (
        <div className={cl.container}>
            <NewsList news={news} />
            <FilmHome films={films} />
        </div>
    );
};

export default Home;
