import { Home } from '../pages/Home/Home.jsx';
import { Movies } from '../pages/Movies/Movies.jsx';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails.jsx';
import { Container, Header, Logo, Link } from './App.styled';
import { TbMovie } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import { Route, Routes } from 'react-router-dom';
export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <IconContext.Provider value={{ color: 'black', size: '1.5em' }}>
            <span role="img" aria-label="filmoteka icon">
              <TbMovie />
            </span>
            <span>Filmoteka</span>
          </IconContext.Provider>
          
        </Logo>
        <nav>
          <Link to="/" end>
            Tranding Movies
          </Link>
          <Link to="/movies">Serch Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </Container>
  );
};
