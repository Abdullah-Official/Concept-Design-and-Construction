import HeroSection from "../components/hero-section";
import Navbar from "../components/navbar";
import styles from "../styles/About.module.css";
import Head from "next/head";
import Footer from "../components/footer";
import { TeamData } from "../Data/team";

function About() {
  return (
    <div>
      <Head>
        <title>About us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Navbar  */}
      <Navbar />

      {/* Hero Section  */}
      <HeroSection
        title="Who we are ?"
        desc="Concept Design  Constructor is a full-service construction, remodel and general contracting company based in Texas with the

      ambition to provide exceptional services to its clients."
      />

      {/* Company Overview  */}

      <div className="container-fluid my-5 py-5 ">
        <section className="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
          <div className="row">
            <div
              className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center"
              data-aos="zoom-in-up"
            >
              <img
                src="https://images.unsplash.com/photo-1465829235810-1f912537f253?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                className={`card z-depth-1`}
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
              <h2
                className="font-weight-bold"
                style={{ color: "#053a93" }}
                data-aos="fade-up"
              >
                Company Overview
              </h2>

              <p className="font-weight-normal text-primary" data-aos="fade-up">
                Making your vision come true, that is what we do
              </p>

              <p
                className="text-muted"
                style={{ textAlign: "justify" }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Concept Design & Constructor is a premier construction firm in
                Texas with an ambition to serve the infrastructure needs of
                clients throughout the state. From residential, commercial,
                industrial to everything in between, we approach each project
                with a laser focus on design with remarkable attention to detail
                and a passion for excellence. We take pride in the challenge of
                finding better solutions to design & construction and we are not
                satisfied until our client is 100% satisfied with all aspects.
              </p>

              {/* <a
                className="font-weight-bold"
                href="#section2"
                data-aos="zoom-in-right"
                data-aos-delay="100"
              >
                Learn more<i className="fas fa-angle-right ml-2"></i>
              </a> */}
            </div>
          </div>
        </section>
      </div>

      {/* History, Vision, Mission  */}

      <div id="section2" className={`${styles.parallax_part}`}>
        <div className={`container py-5 my-5 `}>
          <div
            className="card mb-4"
            data-aos-anchor-placement="center-bottom"
            data-aos="fade-up"
          >
            <div className="card-header white">
              <h4
                className="font-weight-bold mb-0"
                style={{ color: "#053a93" }}
              >
                Core Values
              </h4>
            </div>
            <div className="card-body">
              <p className="card-text">
                Concept Design & Constructor was built around these core values
                that are considered to be the bedrock of our company.
              </p>
              <h5 className="font-weight-bold py-3 orange-text">
                Diligence • Expertise • Quality • Safety • Integrity • Success
              </h5>
              <p className="card-text">
                When you partner with Concept Design & Constructor, you join
                hands with a highly-respected, solid team of professionals who
                thrive in a culture of diligence, expertise, quality, safety,
                integrity and success. Our clients have their questions answered
                and their concerns met. Whether large or small, all jobs are
                prepared with a high level of attention and care, on time and on
                budget.
              </p>
              <p className="card-text">
                By focusing on our core values in all that we do, we provide
                results that exceed the expectations of our clients.
              </p>
            </div>
          </div>
          <section className="p-md-3 ">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div
                  className="card mb-4"
                  style={{ height: "100%" }}
                  data-aos="zoom-in-up"
                >
                  <div className="card-header white">
                    <h4
                      className="font-weight-bold mb-0"
                      style={{ color: "#053a93" }}
                    >
                      Vision
                    </h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Our vision reflects the very essence of our existence.
                    </p>
                    <ul>
                      <li>
                        <p className="card-text">
                          To be the most respected and sought-after construction
                          firm in the United States.
                        </p>
                      </li>
                      <li>
                        <p className="card-text">
                          A company that our customers want to work with and our
                          employees are proud to work for.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div
                  className="card mb-4"
                  style={{ height: "100%" }}
                  data-aos="zoom-in-up"
                >
                  <div className="card-header white">
                    <h4
                      className="font-weight-bold mb-0"
                      style={{ color: "#053a93" }}
                    >
                      Mission
                    </h4>
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
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Teams Section  */}

      <div className="container my-5">
        <section className="team-section text-center dark-grey-text">
          <h3 className="font-weight-bold pb-2 mb-4" data-aos="zoom-in-up">
            Meet the Team
          </h3>
          <p
            className="text-muted w-responsive mx-auto mb-5"
            data-aos="flip-up"
            data-aos-delay="200"
          >
            Put our experience to the test when you work with the team at
            Concept Design &amp; Constructor. Meet the leaders of CDC today to
            discuss your project needs.
          </p>

          <div className="row">
            {TeamData.map((v, i) => {
              return (
                <div className="col-lg-4 col-md-4 mb-4" data-aos="flip-left">
                  <div className="avatar mx-auto">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                      className="rounded-circle img-fluid z-depth-1"
                      alt="Sample avatar"
                    />
                  </div>
                  <h5 className="font-weight-bold mt-4 mb-3">{v.name}</h5>
                  <p className="text-uppercase blue-text">
                    <strong>{v.position}</strong>
                  </p>
                  <p className="grey-text">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci sed quia non numquam modi
                    tempora eius.
                  </p>
                  <ul className="list-unstyled mb-0">
                    <a className="p-2 fa-lg fb-ic">
                      <i className="fab fa-facebook-f blue-text"> </i>
                    </a>
                    <a className="p-2 fa-lg tw-ic">
                      <i className="fab fa-twitter blue-text"> </i>
                    </a>
                    <a className="p-2 fa-lg ins-ic">
                      <i className="fab fa-instagram blue-text"> </i>
                    </a>
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
