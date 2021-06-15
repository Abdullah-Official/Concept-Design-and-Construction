import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Section2 = () => {
  return (
    <div
      style={{ marginBottom: 40 }}
      className={`${styles.sec2_main} container-fluid`}
    >
      <div className="container ">
        <section className="dark-grey-text">
          <div className="row pr-lg-5">
            <div className={`col-md-12 col-lg-7 col-12 col-sm-12 ${styles.sec2_div1}`}>
              <div className={`view  ${styles.section2_img_Cont}`}>
                <img
                  src="/images/sec2-img.jpg"
                  alt="Picture of the section2"
                  className={`img-fluid ${styles.img_sec2}`}
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-5 col-sm-12 col-12 d-flex align-items-center mt-3">
              <div>
                <h3 className={`font-weight-bold mb-3 ${styles.heading_sec2}`}>
                  Company Overview
                </h3>

                <p className={`text-black text-justify ${styles.text_sec2}`}>
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

               <div style={{display:'flex', justifyContent:'center'}}>
               <a
                  type="button"
                  className={`btn mx-0 text-white ${styles.btn_about}`}
                  href="/about"
                >
                  Learn More
                </a>
               </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section2;
