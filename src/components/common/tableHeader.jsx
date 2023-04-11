function TableHeader({ columns, onSort, sortColumn }) {
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

  const raiseSortIcon = (column) => {
    if (column.path !== sortColumn.path) return null;

    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th
            className="clickable"
            onClick={() => raiseSort(column.path)}
            key={`${column.path || column.key}-${index}`}
          >
            {column.label} {raiseSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
