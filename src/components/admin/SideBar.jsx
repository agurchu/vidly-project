import React from "react";
import { Link, Route } from "react-router-dom";

export default function SideBar({ match }) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/admin/posts">Posts</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
      </ul>
      <Route path="/admin/users" Component={User} />
    </div>
  );
}
