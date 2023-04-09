import { genres } from "../services/fakeGenreService";

function ListGroup(props) {
  return (
    <ul class="list-group">
      <li class="list-group-item">All Genres</li>

      {genres.map((genre) => (
        <li class="list-group-item">{genre.name}</li>
      ))}
    </ul>
  );
}

export default ListGroup;
