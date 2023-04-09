import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";

function Movies() {
  const [movies, setMovies] = useState(getMovies());
  const [pageSize, setPageSize] = useState(4);

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
    console.log(movie);
  };

  const handlePageChange = (page) => {
    console.log(page);
  };

  return (
    <>
      {movies.length === 0 ? (
        <p>There are no movies in the database</p>
      ) : (
        <>
          <p>Showing {movies.length} movies in the database</p>
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
              {movies.map((movie) => (
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
            onPageChane={handlePageChange}
          />
        </>
      )}
    </>
  );
}

export default Movies;
