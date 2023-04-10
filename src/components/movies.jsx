import React, { useEffect, useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utility/paginate";
import ListGroup from "./listGroup";
import { getGenres } from "../services/fakeGenreService";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setMovies(getMovies());

    setGenres(getGenres());
  }, []); // Empty dependency array to indicate that the effect should only run once (on mount) and not depend on any props or state

  const handleDelete = (movie) => {
    const newMovies = [...movies];
    return setMovies(
      newMovies.filter((newMovie) => newMovie._id !== movie._id)
    );
  };

  const handleLiked = (movie) => {
    const newMovies = [...movies];
    const index = newMovies.indexOf(movie);
    newMovies[index].liked = !movies[index].liked;
    setMovies(newMovies);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const movieItems = paginate(movies, currentPage, pageSize);

  const handleGenreSelect = (genre) => {
    console.log(genre);
  };

  return (
    <div className="row">
      <div className="col-2">
        <ListGroup items={genres} onItemSelect={handleGenreSelect} />
      </div>
      <div className="col">
        {movieItems.length === 0 ? (
          <p>There are no movies in the database</p>
        ) : (
          <>
            <p>
              Showing {movieItems.length}{" "}
              {movieItems.length === 1 ? "movie" : "movies"} in the database
            </p>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {movieItems.map((movie) => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like
                        liked={movie.liked}
                        onClick={() => handleLiked(movie)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(movie)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemsCount={movies.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Movies;
