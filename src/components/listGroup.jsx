import { genres } from "../services/fakeGenreService";

function ListGroup(props) {
  const { onItemSelect } = props;
  return (
    <ul className="list-group">
      <li className="list-group-item">All Genres</li>

      {genres.map((genre) => (
        <li
          key={genre._id}
          className="list-group-item"
          onClick={() => onItemSelect(genre)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
