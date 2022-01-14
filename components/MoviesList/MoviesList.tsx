import { Row, Col } from "antd";
import { IMovie } from "../../interfaces/IMovie";

interface IProps {
  movies: {
    Search: IMovie[];
  };
}

const MoviesList = ({ movies }: IProps) => {
  console.log(movies);
  return (
    <Row>
      {movies.Search.map((item) => (
        <Col xs={24} sm={12} md={8} lg={6}>
          {item.Title}
        </Col>
      ))}
    </Row>
  );
};

export default MoviesList;
