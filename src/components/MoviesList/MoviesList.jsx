import { Link } from 'react-router-dom';
import { Container, CardWrapper, ProductName, Img } from './MovieList.styled.js';

export const MoviesList = ({ movies }) => {
  return (
    <Container>
      {movies.map(movie => {
        const { title, poster_path, id } = movie;
        return (
          <CardWrapper key={id}>
            <Link to={`movies/${id}`}>
              <Img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt={title}
              />
              <ProductName>{title}</ProductName>
            </Link>
          </CardWrapper>
        );
      })}
    </Container>
  );
};
