import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

const Section1 = () => {
  return (
    <div style={{ marginTop: 118, marginBottom: 30 }}>
      <div className="container-fluid">
        <div className="row">
          <div
            className={`col-md-6 col-lg-6 col-sm-10 col-10 offset-1 ${styles.hero_sect1}`}
          >
            <h1
              className={`text-white  ${styles.heading_section1} `}
              style={{
                fontSize: 65,
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
              data-aos="zoom-in-down"
            >
              {`From Concept \n to Creation`}
            </h1>
            <div
              style={{
                height: 2,
                backgroundColor: "#fff",
                width: "65%",
                marginBottom: 26,
              }}
            ></div>
            <p
              className={`${styles.section1_subTxt}`}
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20,
                width: "70%",
              }}
            >
              We provide professional construction services and turn your dream
              into a beautiful reality.{" "}
            </p>
            <div className={`${styles.btns_section1}`}>
              <button
                type="button"
                className={`btn text-white ${styles.btn_about}`}
                style={{ width: 200, borderRadius: 100 }}
              >
               <Link href="/about" style={{ width: "100%", height: "100%" }}>
                  Learn More
                </Link>
              </button>
              <button
                type="button"
                className={`btn text-white ${styles.btn_contact}`}
                style={{ width: 200, borderRadius: 100 }}
              >
                <Link href="/contact" style={{ width: "100%", height: "100%" }}>
                  Get a Quote
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
