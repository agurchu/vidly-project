import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utility/paginate";
import ListGroup from "./listGroup";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDelete = (movie) => {
    const newMovies = [...this.state.movies];
    const updatedMovies = newMovies.filter(
      (newMovie) => newMovie._id !== movie._id
    );
    this.setState({ movies: updatedMovies });
  };

  handleLiked = (movie) => {
    const newMovies = [...this.state.movies];
    const index = newMovies.indexOf(movie);
    newMovies[index].liked = !newMovies[index].liked;
    this.setState({ movies: newMovies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    console.log(genre);
  };

  render() {
    const { movies, genres, pageSize, currentPage } = this.state;
    const movieItems = paginate(movies, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup items={genres} onItemSelect={this.handleGenreSelect} />
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
                          onClick={() => this.handleLiked(movie)}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => this.handleDelete(movie)}
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
                onPageChange={this.handlePageChange}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Movies;
