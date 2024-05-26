import { TypeFilm } from "@/@types/AsyncTypes";
import Image from "next/image";

const FilmItem = ({film}: {film: TypeFilm}) => {
  return (
    <div>
      <Image
        alt={film.nameRu || film.nameOriginal}
        src={film.posterUrlPreview}
        width={500}
        height={500}
        priority
      />
      <p>{film.nameRu || film.nameOriginal}</p>
      <p>{film.shortDescription}</p>
    </div>
  );
};

export default FilmItem;
