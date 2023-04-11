import _ from "lodash";

function TableBody({ data, columns }) {
  return (
    <tbody className="table-group-divider">
      {data.map((item) => (
        <tr key={data._id}>
          {columns.map((column) => (
            <td key={column.path}>
              {_.get(item, column.path) || column.content(item)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
