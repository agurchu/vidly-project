function TableHeader(props) {
  const { columns, onSort, sortColumn } = props;
  const raiseSort = (path) => {
    const newSortColumn = { ...sortColumn };
    if (newSortColumn.path === path) {
      newSortColumn.order = newSortColumn.order === "asc" ? "desc" : "asc";
    } else {
      newSortColumn.path = path;
      newSortColumn.order = "asc";
    }
    onSort(newSortColumn);
  };
  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th
            onClick={() => raiseSort(column.path)}
            key={`${column.path || column.key}-${index}`}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
