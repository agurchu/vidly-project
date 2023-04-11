import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="bg-dark  ">
      <nav className="container navbar bg-body-tertiary navbar-expand ">
        <div className="container-fluid">
          <Link className="navbar-brand white-text" to="/">
            Katlego J Dev
          </Link>
          <div className="navbar-nav">
            <Link className="nav-link white-text" to="/">
              home
            </Link>
            <Link className="nav-link white-text" to="/products">
              Products
            </Link>
            <Link className="nav-link white-text" to="/posts">
              Posts
            </Link>
            <Link className="nav-link white-text" to="/admin">
              Admin
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
