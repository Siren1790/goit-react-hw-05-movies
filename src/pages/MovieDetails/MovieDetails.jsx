import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { getMovieById } from '../../ApiService/apiService.js';
import { CircleLoader } from 'react-spinners';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    (async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (err) {
        console.log(err);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      }
    })();
  }, [movieId]);
  return (
    <main
      style={{
        maxWidth: '960px',
      }}
    >
      <Link to={location.state?.from ?? '/'}>Go Back</Link>
      {isLoading && (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'block',
            position: 'fixed',
            zIndex: '1',
            left: '0',
            top: '0',
          }}
        >
          <CircleLoader
            color="#ffffff"
            loading={isLoading}
            size={250}
            cssOverride={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '30vh',
            }}
          />
        </div>
      )}
      {movie && (
          <div
            style={{
              marginBottom: '50px',
              padding: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              boxShadow: '1px 2px 72px 8px rgba(105,105,105,1)',
            }}
          >
            <div
              style={{
                width: '45%',
              }}
            >
              <img
                style={{
                  width: '100%',
                  boxShadow: '0px 0px 16px 13px rgba(173,161,173,1)',
                }}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div
              style={{
                width: '45%',
              }}
            >
              <h2>{movie.title}</h2>

              <p>{movie.overview}</p>

              <p>Release Date: {movie.release_date}</p>

              <p>Rating: {movie.vote_average}</p>

              <div>
                Additional information
                <ul>
                  <li>
                    <Link to={`/movies/${movieId}/cast`}>Cast</Link>
                  </li>
                  <li>
                    <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      )}
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;