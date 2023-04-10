import React, { useEffect, useState } from "react";
import { getMovies } from "../services/fakeMovieService";

import Pagination from "./common/pagination";
import { paginate } from "../utility/paginate";
import ListGroup from "./listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];
    setMovies(getMovies());

    setGenres(genres);
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

  const filtered =
    selectedGenre && selectedGenre._id
      ? movies.filter((m) => m.genre._id === selectedGenre._id)
      : movies;
  const movieItems = paginate(filtered, currentPage, pageSize);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  const handleSort = (path) => {
    console.log(path);
  };

  return (
    <div className="row">
      <div className="col-3">
        <ListGroup
          selectedItem={selectedGenre}
          items={genres}
          onItemSelect={handleGenreSelect}
        />
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
            <MoviesTable
              movieItems={movieItems}
              onDelete={handleDelete}
              onLiked={handleLiked}
              onSort={handleSort}
            />
            <Pagination
              itemsCount={filtered.length}
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
