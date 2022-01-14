import { useState, useEffect } from "react";
import { Row, Col, Skeleton } from "antd";
import { IMovie } from "../../interfaces/IMovie";
import Movie from "../Movie/Movie";
import Container from "../Container";
import Filter from "../Filter";
import style from "./MoviesList.module.scss";

interface IProps {
  movies: {
    Search: IMovie[];
  };
}

const MoviesList = ({ movies }: IProps) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [moviesList, setMoviesList] = useState(movies.Search || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  function handleKeyDown(e: any) {
    if (e.keyCode === 13) search();
  }

  async function search(): Promise<void> {
    // request to DB and filter data through movieTitle
    try {
      setLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=b0e64d8&s=${movieTitle}`
      );
      const data = await response.json();
      if (data.Response === "False") {
        setError(true);
        return;
      }
      setError(false);
      setMoviesList(data.Search);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (error)
    return (
      <div style={{ textAlign: "center" }}>
        <Filter
          search={search}
          movieTitle={movieTitle}
          setMovieTitle={setMovieTitle}
        />
        Movies was not found!!!
      </div>
    );

  if (loading) return <Skeleton />;

  return (
    <Container>
      <Filter
        search={search}
        movieTitle={movieTitle}
        setMovieTitle={setMovieTitle}
      />
      <Row gutter={[32, 64]} style={{ textAlign: "center" }}>
        {moviesList.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.imdbID}>
            <Movie item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MoviesList;
