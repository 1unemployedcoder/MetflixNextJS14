import { TypeFilms, TypeNews } from "@/@types/AsyncTypes";
import cl from "./HomePage.module.css";
import { getFilms, getNews } from "@/API/FetchService";
import Image from "next/image"

const Home = async () => {
  const newsData = getNews()
  const filmsData = getFilms()
  const [newsFetch, filmsFetch] = await Promise.all([newsData, filmsData])
  const news = newsFetch.items as unknown as TypeNews[]
  const films = filmsFetch.items as unknown as TypeFilms[]
  return (
    <div className={cl.container}>
      <div className={cl.newsContainer}>
        <h3>Последние новости:</h3>
        {news.map(item => 
        <div key={item.kinopoiskId}>
          {item.title}
        </div>
        )}
      </div>
      <div className={cl.filmsContainer}>
        <h3>Фильмы сегодня: </h3>
        {films.map(item =>
          <div key={item.imdbId}>
            {item.nameOriginal}
            {item.ratingImdb}
            <Image src={item.posterUrlPreview} alt={item.nameOriginal} width={100} height={100} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;