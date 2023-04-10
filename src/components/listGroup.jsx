import { values } from "lodash";
import { genres } from "../services/fakeGenreService";

function ListGroup(props) {
  const { items, textProperty, valueProperty, onItemSelect } = props;

  return (
    <ul className="list-group">
      <li className="list-group-item">All Genres</li>

      {items.map((item) => (
        <li key={item[valueProperty]} className="list-group-item">
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
