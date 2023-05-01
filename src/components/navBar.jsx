import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className=" navbar bg-body-tertiary navbar-expand-lg   ">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          Katlego J Dev
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <NavLink className="nav-link " to="/movies">
              Movies
            </NavLink>

            <NavLink className="nav-link " to="/customers">
              Customers
            </NavLink>

            <NavLink className="nav-link " to="/rentals">
              Rentals
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
