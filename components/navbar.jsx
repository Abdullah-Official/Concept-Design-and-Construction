import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className={`mb-1 scrolling-navbar navbar navbar-expand-lg ${styles.nav_custom}`}
    >
      <div style={{ height: "inherit", cursor: "pointer" }}>
        <Link
          className="navbar-brand text-white cursor-pointer"
          style={{ color: "white", cursor: "pointer" }}
          href="/"
        >
          <img
            src="/images/logo.png"
            style={{ objectFit: "contain", cursor: "pointer", height:80, width:200 }}
          />
        </Link>
      </div>
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
      <div
        className="collapse navbar-collapse"
        style={{ textAlign: "center" }}
        id="navbarSupportedContent-333"
      >
        <ul className="navbar-nav ml-auto text-white">
          <li className={`nav-item  mx-4 mt-1 active ${styles.nav_link}`}>
            <Link className={`nav-link`} href="/">
              Home
            </Link>
          </li>
          <li className={`nav-item  mx-4 mt-1  ${styles.nav_link}`}>
            <Link className={`nav-link`} href="/about">
              About
            </Link>
          </li>
          <li className={`nav-item  mx-4 mt-1  ${styles.nav_link}`}>
            <Link className={`nav-link`} href="/services">
              Services
            </Link>
          </li>
          <li className={`nav-item  mx-4 mt-1  ${styles.nav_link}`}>
            <Link className={`nav-link`} target="_blank" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <ul
          className="navbar-nav ml-auto nav-flex-icons"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <li className="nav-item">
            <a
              target="_blank"
              href="https://twitter.com/ConceptDesConst"
              className="nav-link waves-effect waves-light"
            >
              <i className="fab fa-twitter text-white  mx-2"></i>
            </a>
          </li>
          <li className="nav-item">
            <a target="_blank" href="https://www.facebook.com/cdconstructor" className="nav-link waves-effect waves-light">
              <i className="fab fa-facebook text-white  mx-2"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              target="_blank"
              href="https://www.instagram.com/Conceptdesign51"
              className="nav-link waves-effect waves-light"
            >
              <i className="fab fa-instagram text-white  mx-2"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/concept-design-constructor"
              className="nav-link waves-effect waves-light"
            >
              <i className="fab fa-linkedin text-white  mx-2"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
