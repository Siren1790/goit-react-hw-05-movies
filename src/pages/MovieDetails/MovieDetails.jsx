import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../ApiService/apiService.js';
import { CircleLoader } from 'react-spinners';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function fetchDta() {
      try {
        setIsLoading(true);
        const data = await getMovieById(movieId);
        setMovie(data);
        console.log(data);
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
            // border: '2px solid black',
            // borderRadius: '2%',
            marginBottom: '50px',
            padding: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            boxShadow: "0px 78px 72px 68px rgba(105,105,105,1)",
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
          </div>
        </div>
      )}
    </main>
  );
};
