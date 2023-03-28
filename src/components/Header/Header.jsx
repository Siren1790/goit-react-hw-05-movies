import { Header, Logo, Link, Container } from 'components/App.styled';
import { TbMovie } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const HeaderComponent = () => {
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
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet></Outlet>
      </Suspense>
    </Container>
  );
};

export default HeaderComponent;
