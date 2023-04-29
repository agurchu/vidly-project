import React from "react";
import { useParams } from "react-router-dom";
import queryString from "query-string";

function Posts() {
  const { year, month } = useParams();
  const result = queryString.parse(location.search);

  return (
    <div>
      <h1>Posts</h1>
      Year: {year} , Month: {month}
    </div>
  );
}

export default Posts;
