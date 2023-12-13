import React, { useContext, useState } from "react";
import "../Components/Header.css";
import { AuthContext } from "../Routes/AuthContext";

const Header = ({ displayName, image, handleLogout }) => {
  const { searchTerm, setSearchTerm } = useContext(AuthContext);

  const handleSearch = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Movie APP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Favorites
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Watchlist
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                aria-label="Search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for movies..."
              />
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <img
                  src={image}
                  className="logo mx-auto d-block nav-link dropdown-toggle"
                  alt="..."
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></img>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item">{displayName}</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item logoutHand"
                      onClick={handleLogout}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
