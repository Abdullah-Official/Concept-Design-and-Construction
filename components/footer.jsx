import styles from "../styles/Navbar.module.css";

function Footer() {
  const year = new Date();
  const cp_year = year.getFullYear();
  return (
    <footer class="page-footer font-small unique-color-dark wow fadeIn" data-aos="fade-up">
      <div className={`${styles.footer_head}`}>
        <div class="container">
          <div class="row py-4 d-flex align-items-center">
            <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 class="mb-0">Get connected with us on social networks!</h6>
            </div>

            <div class="col-md-6 col-lg-7 text-center text-md-right">
              <a
                class="fb-ic"
                target="_blank"
                // href="https://www.facebook.com/anees.a.khan.3388/"
              >
                <i class="fab fa-facebook-f white-text mr-4"> </i>
              </a>
              <a
                class="tw-ic"
                target="_blank"
                // href="https://twitter.com/Reliablegroups"
              >
                <i class="fab fa-twitter white-text mr-4"> </i>
              </a>
              <a class="gplus-ic">
                <i class="fab fa-google-plus-g white-text mr-4"> </i>
              </a>
              <a class="li-ic">
                <i class="fab fa-linkedin-in white-text mr-4"> </i>
              </a>
              <a
                class="ins-ic"
                target="_blank"
                // href="https://www.instagram.com/abdullah_khan1245/"
              >
                <i class="fab fa-instagram white-text"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center text-md-left mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">
              Concept Design & Constructors
            </h6>
            <hr
              class="blue darken-2 accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 70 }}
            />
            <p>
              Concept Design & Constructor is a premier construction firm in
              Texas with an ambition to serve the infrastructure needs of
              clients throughout the state.
            </p>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">Services</h6>
            <hr
              class="blue darken-2 accent-2 mb-4 mt-0 d-inline-block mx-auto"
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
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">Useful links</h6>
            <hr
              class="blue accent-2 mb-4 mt-0 d-inline-block mx-auto"
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
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase font-weight-bold">Contact</h6>
            <hr
              class="blue darken-2 accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
              <i class="fas fa-home mr-3"></i> New York, 94126 United States
            </p>
            <p>
              <i class="fas fa-envelope mr-3"></i> Tamur_shaikh87@yahoo.com
            </p>
            <p>
              <i class="fas fa-phone mr-3"></i> + 01 234 567 89
            </p>
          </div>
        </div>
      </div>
      <div class="footer-copyright text-center py-3">
        © {cp_year} Copyright:
        <a href="https://concept-design-and-constructors.vercel.app/">
          {" "}
          concept-design-and-constructors.vercel.app
        </a>
      </div>
    </footer>
  );
}

export default Footer;
