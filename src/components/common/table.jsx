import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

export default function Table({ data, onSort, sortColumn, columns }) {
  return (
    <table className="table table-hover">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={data} columns={columns} />
    </table>
  );
}
