import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../ApiService/apiService.js';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    getMovieById(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    <main>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
    </main>
  );
};
