import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="container navbar bg-body-tertiary navbar-expand">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Katlego J Dev
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            home
          </Link>
          <Link className="nav-link" to="/products">
            Products
          </Link>
          <Link className="nav-link" to="/post">
            Posts
          </Link>
          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
