import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

const Section1 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-10 col-10 offset-1">
            <h1
              className={`text-white  ${styles.heading_section1} `}
              style={{ fontSize: 45 }}
            >
              From Concept to Creation
            </h1>
            <div
              style={{
                height: 2,
                backgroundColor: "#ccc",
                width: "55%",
                marginBottom: 30,
              }}
            ></div>
            <p style={{ color: "#fff", opacity: 0.8 }}>
              We provide professional construction services and turn your dream
              into a beautiful reality.{" "}
            </p>
            <div className={`${styles.btns_section1}`}>
              <button
                type="button"
                className={`btn text-white `}
                style={{ width: 200, borderRadius: 100 }}
              >
                About us
              </button>
              <button
                type="button"
                className={`btn text-white ${styles.btn_contact}`}
                style={{ width: 200, borderRadius: 100 }}
              >
                <Link href="/contact" style={{width:'100%', height:'100%'}}>Contact us</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
