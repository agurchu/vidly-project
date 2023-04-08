import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";

function Movies() {
  const [movies, setMovies] = useState(getMovies());

  const handleDelete = (movie) => {
    const newMovies = [...movies];
    newMovies.filter((newMovie) => newMovie._id !== movie);
    return setMovies(newMovies);
  };

  return (
    <div>
      <p>Showing {movies.length} movies in the database</p>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
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
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(movie._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Movies;
