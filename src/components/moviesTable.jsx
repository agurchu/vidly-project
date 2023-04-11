import Like from "./common/like";
import Table from "./common/table";

function MoviesTable(props) {
  const { onLiked, onDelete, movieItems, onSort, sortColumn } = props;
  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => onLiked(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button className="btn btn-danger" onClick={() => onDelete(movie)}>
          Delete
        </button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={movieItems}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
}

export default MoviesTable;
