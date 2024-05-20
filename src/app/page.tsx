import { TypeFilms, TypeNews } from "@/@types/AsyncTypes";
import cl from "./HomePage.module.css";
import { getFilms, getNews } from "@/API/FetchService";
import Image from "next/image"
import { Button } from "@/components/ui/button/Button";
import Link from "next/link";
const Home = async () => {
  const newsData = getNews()
  const filmsData = getFilms()
  const [news, films]: [TypeNews[], TypeFilms[]] = await Promise.all([newsData, filmsData])
  return (
    <div className={cl.container}>
      <div className={cl.newsContainer}>
        <h3>Последние новости:</h3>
        {news.map(item => 
        <div key={item.kinopoiskId}>
          {item.title}
          {new Date(item.publishedAt).toLocaleDateString()}
          <Image alt={item.title} src={item.imageUrl} width={100} height={100} />
        </div>
        )}
      </div>
      <div className={cl.filmsContainer}>
        <h3>Фильмы сегодня: </h3>
        {films.map(item =>
          <div key={item.kinopoiskId}>
            {item.nameRu ?? item.nameOriginal}
            {item.ratingImdb}
            <Image alt={item.nameRu ?? item.nameOriginal} src={item.posterUrlPreview} width={100} height={100} />
            <Button><Link href={`/films/${item.kinopoiskId}`}>Смотреть</Link></Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;