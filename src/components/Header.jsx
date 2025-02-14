import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <NavLink to="/" className="navbar-brand ">
            🎥 Clinikk TV
          </NavLink>
          <button
            className="navbar-toggler btn btn-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon btn btn-light"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                {" "}
                <NavLink to="/" className="nav-link text-primary">
                  All Videos
                </NavLink>
              </li>
              <li className="nav-item">
                {" "}
                <NavLink to="/addvideo" className="nav-link text-primary">
                  Add Video
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
