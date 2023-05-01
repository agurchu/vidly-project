import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="bg-dark  ">
      <nav className="container navbar bg-body-tertiary navbar-expand ">
        <div className="container-fluid">
          <NavLink className="navbar-brand white-text" to="/">
            Katlego J Dev
          </NavLink>
          <div className="navbar-nav">
            <NavLink className="nav-link white-text" to="/">
              home
            </NavLink>
            <NavLink className="nav-link white-text" to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-link white-text" to="/customers">
              Customers
            </NavLink>
            <NavLink className="nav-link white-text" to="/rentals">
              Rentals
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
