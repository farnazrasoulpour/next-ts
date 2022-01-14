import styles from "../styles/Home.module.css";
import { IMovie } from "../interfaces/IMovie";
import MoviesList from "../components/MoviesList";

interface IProps {
  movies: IMovie[];
  hasError: boolean;
}

const Home = ({ movies, hasError }: IProps) => {
  if (hasError) return <div>Oooooooopppsss!!!</div>;

  return <MoviesList movies={movies} />;
};

export async function getServerSideProps() {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=b0e64d8&s=avengers"
    );
    const data = await response.json();

    return {
      props: {
        movies: data,
      },
    };
  } catch (e) {
    console.log(e);

    return {
      props: {
        hasError: true,
      },
    };
  }
}

export default Home;
