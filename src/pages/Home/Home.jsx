import { MoviesList } from 'components/MoviesList/MoviesList.jsx';
import { useEffect, useState } from 'react';
import { getTrandingMovies } from '../../ApiService/apiService.js';
import { CircleLoader } from 'react-spinners';

export const Home = () => {
  const [currentPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [btnLoad, setBtnLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function fetchDta() {
      try {
        const data = await getTrandingMovies(currentPage);
        const { results, total_pages } = data;
        setBtnLoad(total_pages > currentPage);
        setMovies([...results]);
      } catch (err) {
        console.log(err.message);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 11300);
      }
    })();
  }, [currentPage]);

  return (
    <main>
      {isLoading && (
        <CircleLoader
          color="#6e1c74"
          loading={isLoading}
          size={100}
          cssOverride={{
            display: "block",
            position: 'fixed',
            zIndex: '1',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            overflow: 'auto',
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />
      )}
      <MoviesList movies={movies} />
      {btnLoad && <h3>Load More BTN</h3>}
    </main>
  );
};
