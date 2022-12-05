import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg main-bg text-white">
      <div className="container-fluid nav-text">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" height="70"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse fs-5" id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link active" aria-current="page" to="/">
              About Us
            </Link>
            <Link className="nav-link" to="/">
              Events
            </Link>
            <Link className="nav-link" to="/">
              Dashboard
            </Link>
            <Link className="nav-link" to="/">
              My Profile
            </Link>
          </div>
          <div className="d-flex align-items-center col-md-4 justify-content-between">
            <Link className="nav-link active" aria-current="page" to="/">
              FAQ
            </Link>
            <Link className="nav-link" to="/">
              Contact Us
            </Link>
            <button className="btn main-bg text-white fw-bold border-white">
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
