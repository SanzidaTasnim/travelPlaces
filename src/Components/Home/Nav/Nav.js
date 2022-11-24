import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../images/logo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagento } from "@fortawesome/free-brands-svg-icons";
import "./Nav.css";

library.add(faMagento);

const Nav = ({ color, img }) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/home">
            <img src={img || logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto nav-items">
              <form className="d-flex" role="search">
                <div className="input-icon">
                  <FontAwesomeIcon icon={faMagento} className="icon" />
                  <input
                    className="form-control me-2 input-field"
                    type="search"
                    placeholder="Search Your Destination"
                    aria-label="Search"
                  />
                </div>
              </form>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: `${color}` }}
                  aria-current="page"
                  to="/news"
                >
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: `${color}` }}
                  to="/destination"
                >
                  Destination
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: `${color}` }}
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: `${color}` }}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <button className="btn btn-warning">Login</button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
