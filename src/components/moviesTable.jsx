import Like from "./common/like";
import TableHeader from "./common/tableHeader";

function MoviesTable(props) {
  const { onLiked, onDelete, movieItems, onSort, sortColumn } = props;
  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" },
  ];

  return (
    <table className="table table-hover">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <tbody className="table-group-divider">
        {movieItems.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onClick={() => onLiked(movie)} />
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(movie)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MoviesTable;
