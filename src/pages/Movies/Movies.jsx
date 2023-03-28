import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getByName } from 'ApiService/apiService';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [moviesData, setMoviesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const handleChange = event => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    if (searchQuery === `` || searchQuery === null) {
      return;
    }
    const fetchByQuery = async () => {
      try {
        setIsLoading(true);
        const {results} = await getByName(searchQuery);
        setMoviesData(results);
      } catch (error) {
        console.log(error);
        return alert(`Sorry, please try again`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchByQuery();
  }, [searchQuery]);

  const onHandleSubmit = event => {
    event.preventDefault();

    setSearchParams({ query: query });
    setQuery('');
  };
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Movies</button>
      </form>
      {isLoading && <div>...Loading</div>}
      {moviesData && <MoviesList movies={moviesData} />}
    </div>
  );
};

export default Movies;
