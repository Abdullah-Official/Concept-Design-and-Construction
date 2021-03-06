import React, { useEffect } from "react";
import styles from "../styles/Contact.module.css";
import Navbar from "../components/navbar";
import emailjs from "emailjs-com";
import AOS from "aos";
import Head from "next/head";
import Footer from "../components/footer";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ydc3mul",
        "template_grtgsup",
        e.target,
        "user_FauCheICpd08kwlZBSH12"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Head>
        <title>Contact us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Navbar />
      </div>
      <div style={{ marginTop: 130 }}>
        <div className="container mt-5">
          <section className="dark-grey-text mb-5">
            <h3
              className="font-weight-bold text-center mb-4"
              data-aos="zoom-out"
            >
              Contact Us
            </h3>
            <p
              className="text-center w-responsive mx-auto pb-5"
              data-aos="fade-don"
            >
            We look forward to doing business with you. Contact us to learn more about how we can help you!
            </p>

            <div className="row">
              <div
                className="col-lg-5 mb-lg-0 pb-lg-3 mb-4"
                data-aos-anchor-placement="top-center"
                data-aos="fade-up"
              >
                <div className="card">
                  <div className="card-body">
                    <div
                      className={`form-header accent-1 ${styles.form_header}`}
                    >
                      <h3 className="mt-1 text-white text-center py-3 mb-3">
                        <i className="fas fa-envelope"></i> Write to us:
                      </h3>
                    </div>
                    <p className="dark-grey-text">
                      We'll write rarely, but only the best content.
                    </p>
                    <form action="post" onSubmit={sendEmail}>
                      <div className="md-form">
                        <i className="fas fa-user prefix grey-text"></i>
                        <input
                          type="text"
                          required
                          id="form-name"
                          className="form-control"
                          name="name"
                        />
                        <label for="form-name">Your name</label>
                      </div>
                      <div className="md-form">
                        <i className="fas fa-envelope prefix grey-text"></i>
                        <input
                          type="text"
                          required
                          id="form-email"
                          className="form-control"
                          name="email"
                        />
                        <label for="form-email">Your email</label>
                      </div>
                      <div className="md-form">
                        <i className="fas fa-tag prefix grey-text"></i>
                        <input
                          type="text"
                          required
                          id="form-Subject"
                          className="form-control"
                          name="subject"
                        />
                        <label for="form-Subject">Subject</label>
                      </div>
                      <div className="md-form">
                        <i className="fas fa-pencil-alt prefix grey-text"></i>
                        <textarea
                          required
                          id="form-text"
                          className="form-control md-textarea"
                          rows="3"
                          name="message"
                        ></textarea>
                        <label for="form-text">Send message</label>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          style={{ backgroundColor: "#00225a" }}
                          className="btn text-white"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div
                  id="map-container-section"
                  className={`z-depth-1-half ${styles.map_container_section} mb-4`}
                  style={{ height: 400 }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.815151407842!2d-96.513911384808!3d33.16647938085617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c0ebcdefa5255%3A0xdc120229ba480c8e!2s620%20Hidden%20Cove%20Dr%2C%20Princeton%2C%20TX%2075407%2C%20USA!5e0!3m2!1sen!2s!4v1620806395494!5m2!1sen!2s"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="row text-center" data-aos="fade-in">
                  <div className="col-md-4">
                    <a>
                      <i
                        className="fas py-3 fa-map-marker-alt fa-2x "
                        style={{ color: "#00225a" }}
                      ></i>
                    </a>
                    <p>620 Hidden Cove Dr Princeton, TX 75407, USA </p>
                  </div>
                  <div className="col-md-4">
                    <a>
                      <i
                        className="fas py-3 fa-phone fa-2x "
                        style={{ color: "#00225a" }}
                      ></i>
                    </a>
                    <p>+1 (469) 674-1200</p>
                    {/* <p className="mb-md-0">Mon - Fri, 8:00-22:00</p> */}
                  </div>
                  <div className="col-md-4">
                    <a>
                      <i
                        className="fas py-3 fa-envelope  fa-2x "
                        style={{ color: "#00225a" }}
                      ></i>
                    </a>
                    <p>Tamur_shaikh87@yahoo.com</p>
                    <p className="mb-0">info@cdconstructor.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
