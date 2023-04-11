import React from "react";

function Posts({ match }) {
  return (
    <div>
      <h1>Posts</h1>
      <p>
        Year:{match.params.year} ,Month: {match.params.month}
      </p>
    </div>
  );
}

export default Posts;
