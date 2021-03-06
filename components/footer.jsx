import styles from "../styles/Navbar.module.css";

function Footer() {
  const year = new Date();
  const cp_year = year.getFullYear();
  return (
    <footer
      className="page-footer font-small unique-color-dark wow fadeIn"
      data-aos="fade-up"
    >
      <div className={`${styles.footer_head}`}>
        <div className="container">
          <div className="row py-4 d-flex align-items-center">
            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0">
                Get connected with us on social networks!
              </h6>
            </div>

            <div className="col-md-6 col-lg-7 text-center text-md-right">
              <a
                className="fb-ic"
                target="_blank"
                href="https://www.facebook.com/cdconstructor"
              >
                <i className="fab fa-facebook-f white-text mr-4"> </i>
              </a>
              <a
                className="tw-ic"
                target="_blank"
                href="https://twitter.com/ConceptDesConst"
              >
                <i className="fab fa-twitter white-text mr-4"> </i>
              </a>
              <a
                className="gplus-ic"
                href="https://www.linkedin.com/company/concept-design-constructor"
                target="_blank"
              >
                <i className="fab fa-linkedin white-text mr-4"> </i>
              </a>
              <a
                className="ins-ic"
                target="_blank"
                href="https://www.instagram.com/Conceptdesign51"
              >
                <i className="fab fa-instagram white-text"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center text-md-left mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">
              Concept Design & Constructor
            </h6>
            <hr
              className="blue darken-2 accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 70 }}
            />
            <p>
              Concept Design & Constructor is a premier construction firm in
              Texas with an ambition to serve the infrastructure needs of
              clients throughout the state.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Services</h6>
            <hr
              className="blue darken-2 accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
              <a target="_blank" href="/services">
                General Contractor
              </a>
            </p>
            <p>
              <a target="_blank" href="/services">
                Roofing
              </a>
            </p>

            <p>
              <a target="_blank" href="/services">
                Archticture/ Build-Design
              </a>
            </p>
            <p>
              <a target="_blank" href="/services">
                Flooring
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
            <hr
              className="blue accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
              <a target="_blank" href="#">
                CEO's Facebook
              </a>
            </p>
            <p>
              <a target="_blank" href="#">
                CEO's LinkedIn
              </a>
            </p>
            <p>
              <a href="/about" target="_blank">
                About us
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr
              className="blue darken-2 accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
              <i className="fas fa-home mr-3"></i> 620 Hidden Cove Dr Princeton,{" "}
              <span style={{ paddingLeft: 35.5 }}>75407, USA</span>
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> info@cdconstructor.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i>
              <span style={{ paddingLeft: 4.5, paddingTop: 40 }}>
                +1 (469) 674-1200
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        ?? {cp_year} Copyright | Concept Design & Constructor | All Rights
        Reserved <br />
        <a href="http://www.egriptechnologies.com/">
          {" "}
          Designed and Developed by{" "}
          <span style={{ fontWeight: "600" }}>E-GRIP Technologies</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
