import Link from "next/link";
import { IMovie } from "../../interfaces/IMovie";
import style from "./Movie.module.scss";

interface IProps {
  item: IMovie;
}

const Movie = ({ item }: IProps) => {
  return (
    <a href={`https://imdb.com/title/${item.imdbID}`}>
      <div className={style.imageContainer} key={item.imdbID}>
        <img className={style.movie} src={item.Poster} />
      </div>
    </a>
  );
};

export default Movie;
