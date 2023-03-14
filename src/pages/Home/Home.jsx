import { MoviesList } from 'components/MoviesList/MoviesList.jsx';
import { useEffect, useState } from 'react';
import { getTrandingMovies } from '../../ApiService/apiService.js';

export const Home = () => {
  const [page, setPage] = useState(3);
  const [totalPages, setTotalPages] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrandingMovies(page).then(({ results, total_pages, page }) => {
      setTotalPages(total_pages);
      setMovies([...results]);
    });
  }, [page]);

  return (
    <main>
        <MoviesList movies={movies}/>
    </main>
  );
};


