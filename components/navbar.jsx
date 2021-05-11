import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg p-3 ${styles.nav_custom}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h5 className="text-white">Concept Design</h5>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <i style={{ color: "white" }} className="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" style={{zIndex:1111}} id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0 text-white"
              style={{ marginLeft: "auto" }}
            >
              <li className="nav-item mx-2">
                <a  className={`nav-link ${styles.nav_text}`} aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a  className={`nav-link ${styles.nav_text}`} href="#">
                  About
                </a>
              </li>
              <li className="nav-item mx-2">
                <a  className={`nav-link ${styles.nav_text}`} href="#">
                  Services
                </a>
              </li>
              <li className="nav-item mx-2">
                <a  className={`nav-link ${styles.nav_text}`} href="#">
                  Contact
                </a>
              </li>
            </ul>

            <div className="continer d-flex align-items-center">
              <a
                class="btn btn-primary  btn-floating mx-2"
                style={{ backgroundColor: "transparent" }}
                href="#!"
                role="button"
              >
                <i class="fab fa-instagram" />
              </a>
              <a
                class="btn btn-primary  btn-floating mx-2"
                style={{ backgroundColor: "transparent" }}
                href="#!"
                role="button"
              >
                <i class="fab  fa-facebook-f" />
              </a>
              <a
                class="btn btn-primary  btn-floating mx-2"
                style={{ backgroundColor: "transparent" }}
                href="#!"
                role="button"
              >
                <i class="fab fa-twitter" />
              </a>
              <a
                class="btn btn-primary  btn-floating mx-2"
                style={{ backgroundColor: "transparent" }}
                href="#!"
                role="button"
              >
                <i class="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
