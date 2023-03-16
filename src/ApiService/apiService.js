import axios from 'axios';
const API_KEY = 'fed7db976d902fcdece547680e82ff9e';
// const API_KEY = 'fed7db976d902fe547680e82ff9e';

const API_URL_TRENDING_MOVIE =
  'https://api.themoviedb.org/3/trending/movie/week';
const API_URL_MOVIE_ID = 'https://api.themoviedb.org/3/movie/';

export const getTrandingMovies = async page => {
  const { data } = await axios.get(API_URL_TRENDING_MOVIE, {
    params: {
      api_key: API_KEY,
      page: page,
      per_page: 6,
    },
  });
  return data;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`${API_URL_MOVIE_ID + String(id)}`, {
    params: {
        api_key: API_KEY
    },
  });
  return data;
};
