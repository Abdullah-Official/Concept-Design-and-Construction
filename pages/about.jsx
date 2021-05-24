import Navbar from "../components/navbar";
import styles from "../styles/About.module.css";

function About() {
    return (
      <div>
        {/* Navbar  */}
        <Navbar />

        {/* Hero Section  */}
        <div className={`card card-image ${styles.jumbortron_about}`}>
          <div className="text-white text-center rgba-stylish-strong py-5 mt-4 px-4">
            <div className="py-5">
              <h5 className="h5 orange-text">
                <i className="fas fa-truck"></i> Who are we ?
              </h5>
              <h2 className="card-title h2 my-4 py-2">
                Concept Design & Constructors
              </h2>
              <p className="mb-4 pb-2 px-md-5 mx-md-5">
                Concept Design & Constructor is a premier construction firm in
                Texas with an ambition to serve the infrastructure needs of
                clients throughout the state.
              </p>
              <a className="btn peach-gradient">
                <i className="fas fa-hammer left"></i> Our Services
              </a>
            </div>
          </div>
        </div>

        {/* Company Overview  */}

        <div className="container-fluid my-5 py-5 ">
          <section className="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
                <img
                  src="https://ae01.alicdn.com/kf/HTB11uN5hA9WBuNjSspeq6yz5VXax.jpg"
                  // className="img-rounded"
                  alt=""
                  style={{
                    width: "100%",
                    height: 330,
                    objectFit: "cover",
                    borderRadius: 17,
                  }}
                />
              </div>

              <div className="col-lg-6 mb-4 mb-lg-0  d-flex  justify-content-center flex-column">
                <h2 className="font-weight-bold">Company Overview</h2>

                <p className="font-weight-normal text-primary">
                  Making your vision come true, that is what we do
                </p>

                <p className="text-muted" style={{ textAlign: "justify" }}>
                  Concept Design & Constructor is a premier construction firm in
                  Texas with an ambition to serve the infrastructure needs of
                  clients throughout the state. From residential, commercial,
                  industrial to everything in between, we approach each project
                  with a laser focus on design with remarkable attention to
                  detail and a passion for excellence. We take pride in the
                  challenge of finding better solutions to design & construction
                  and we are not satisfied until our client is 100% satisfied
                  with all aspects.
                </p>

                <a className="font-weight-bold" href="#=">
                  Learn more<i className="fas fa-angle-right ml-2"></i>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* History, Vision, Mission  */}
   
       <div className={`${styles.parallax_part}`}>
       <div className={`container py-5 my-5 `}>
          <section className="p-md-3 mx-md-5">
            <div className="row mb-5 d-flex align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-header white">
                    <h4 className="font-weight-bold mb-0">History</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Concept Design & Constructor is the sister concern of “SS
                      Builders and developers Pvt. Ltd.” that has been operating
                      successfully for more than 20 years in Pakistan, providing
                      elite className construction services to its clients. Having
                      proved its worth in its home country, the group decided to
                      move on to serve the construction customers in vicinity of
                      the state of Texas, USA.
                    </p>
                    <small className="blue-text font-weight-bold float-right" href="#">
                     ~ Concept Design
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="view overlay rounded z-depth-1">
                  <img
                    src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3RydWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    className="img-fluid"
                    alt="Sample project image"
                  />
                  <a href="#">
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="row mb-5 d-flex align-items-center justify-content-end">
              <div className="col-md-6 col-lg-4">
                <div className="view overlay rounded z-depth-1">
                  <img
                    src="https://lh3.googleusercontent.com/proxy/oB4McX7MovC8sBwlOiaekIQPbxeW1h7pwKoygrl5Yy-SiaPuOxuCFXTkn2PTcF729qhpKwaagaCbLAme2zGh0cQMkITH-UNlz20_Ur_xTUksiB9rLL8qxRCbl9R8BlTRWQ"
                    className="img-fluid"
                    alt="Sample project image"
                  />
                  <a href="#">
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-header white">
                    <h4 className="font-weight-bold mb-0">Vision</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Our vision reflects the very essence of our existence To
                      Be the most respected and sought-after construction firm.
                      A company that our customers want to work with and our
                      employees are to proud to work for.
                    </p>
                    <small className="blue-text font-weight-bold float-right" href="#">
                     ~ Concept Design
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-header white">
                    <h4 className="font-weight-bold mb-0">Mission</h4>
                  </div>
                  <div className="card-body">
                    <ul>
                      <li>
                        <p className="card-text">
                          Exceeding our clients' expectations
                        </p>
                      </li>
                      <li>
                        <p className="card-text">
                          Encouraging personal excellence by rewarding
                          outstanding performance
                        </p>
                      </li>
                      <li>
                        <p className="card-text">
                          Practicing integrity by embracing the principles of
                          honesty, fairness, and excellence
                        </p>
                      </li>
                    </ul>
                    <small className="blue-text font-weight-bold float-right" href="#">
                     ~ Concept Design
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="view overlay rounded z-depth-1">
                  <img
                    src="https://ca-times.brightspotcdn.com/dims4/default/27473b4/2147483647/strip/true/crop/4000x2250+0+209/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F67%2F0b%2F66c87105430a8bdb5ab9c889e144%2Fgettyimages-1218753869.jpg"
                    className="img-fluid"
                    alt="Sample project image"
                  />
                  <a href="#">
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
       </div>

      </div>
    );
}

export default About
