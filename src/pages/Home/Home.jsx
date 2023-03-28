import { MoviesList } from 'components/MoviesList/MoviesList.jsx';
import { useEffect, useState } from 'react';
import { getTrandingMovies } from '../../ApiService/apiService.js';
import { CircleLoader } from 'react-spinners';
import ReactPaginate from 'react-paginate';

 const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [btnLoad, setBtnLoad] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function fetchDta() {
      try {
        setIsLoading(true);
        const data = await getTrandingMovies(currentPage);
        const { results, total_pages } = data;
        setBtnLoad(Math.ceil(total_pages));
        setMovies([...results]);
      } catch (err) {
        console.log(err.message);
      } finally {
          setIsLoading(false);
      }
    })();
  }, [currentPage]);
  
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  }

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
      <h2>Trending by Week</h2>
      <MoviesList movies={movies} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={btnLoad}
        previousLabel="< previous"
        breakLabel="..."
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </main>
  );
};

export default Home;
