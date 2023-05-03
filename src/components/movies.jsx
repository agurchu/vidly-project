import React, { useEffect, useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import _ from "lodash";
import Pagination from "./common/pagination";
import { paginate } from "../utility/paginate";
import ListGroup from "./listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import { Link } from "react-router-dom";
import SearchBox from "./common/SearchBox";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

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

  let filtered = movies;
  if (searchQuery)
    filtered = movies.filter((m) =>
      m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  else if (selectedGenre && selectedGenre._id)
    filtered = movies.filter((m) => m.genre._id === selectedGenre._id);

  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
  const movieItems = paginate(sorted, currentPage, pageSize);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedGenre(null);
    setCurrentPage(1);
  };
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
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
        <Link to="/movies/new" className="btn btn-primary mb-2 ">
          New Movie
        </Link>
        {movieItems.length === 0 ? (
          <p>There are no movies in the database</p>
        ) : (
          <>
            <p>
              Showing {movieItems.length}{" "}
              {movieItems.length === 1 ? "movie" : "movies"} in the database
            </p>
            <SearchBox value={searchQuery} onChange={handleSearch} />
            <MoviesTable
              movieItems={movieItems}
              sortColumn={sortColumn}
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
