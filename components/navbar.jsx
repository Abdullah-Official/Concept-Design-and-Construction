import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={`mb-1 navbar navbar-expand-lg ${styles.nav_custom}`}>
      <Link
        className="navbar-brand text-white"
        style={{ color: "white" }}
        href="/"
      >
        <h5 className="text-white pt-2" style={{ cursor: "pointer" }}>
          Concept Design
        </h5>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent-333"
        aria-controls="navbarSupportedContent-333"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
        <ul className="navbar-nav ml-auto text-white">
          <li className={`nav-item  mx-4 mt-2 active ${styles.nav_link}`}>
            <Link className={`nav-link`} href="/">
              Home
            </Link>
          </li>
          <li className={`nav-item  mx-4 mt-2  ${styles.nav_link}`}>
            <Link className={`nav-link`} href="#">
              About
            </Link>
          </li>
          <li className={`nav-item  mx-4 mt-2  ${styles.nav_link}`}>
            <Link className={`nav-link`} href="#">
              Services
            </Link>
          </li>
          <li className={`nav-item  mx-4 mt-2  ${styles.nav_link}`}>
            <Link className={`nav-link`} target="_blank" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto nav-flex-icons">
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light">
              <i className="fab fa-twitter text-white  mx-2"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light">
              <i className="fab fa-facebook text-white  mx-2"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light">
              <i className="fab fa-instagram text-white  mx-2"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
