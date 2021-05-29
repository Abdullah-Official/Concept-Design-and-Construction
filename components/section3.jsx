import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

const Section3 = () => {
     const section3Data = [
        {
          img: "/images/sec3_card_img1.jpg",
          title: "Construction",
          col: "col-md-12",
        },
        {
          img: "/images/sec3_card_img2.jpg",
          title: "House Renovation",
        },
        {
          img: "/images/sec3_card_img3.jpg",
          title: "Architecture",
        },
      ];
    
  return (
    <div className="container my-5">
      <section className="dark-grey-text text-center">
        <h1
          style={{ color: "#053a93" }}
          className="font-weight-bold mb-4 pb-2 h1-responsive"
        >
          Glimpse of What We Do
        </h1>
        <div className="row mt-5">
          {section3Data.map((v, i) => {
            return (
              <div key={i} className={`col-lg-4 ${v.col} mb-4`}>
                <div className="view overlay z-depth-1">
                  <img
                    src={v.img}
                    className="img-fluid"
                    alt="Card1 Image"
                    style={{ objectFit: "contain" }}
                  />
                  <div className="mask flex-center blue-gradient-rgba">
                    <a href="/services" target="_blank" className="btn btn-outline-white btn-rounded">
                      see more
                    </a>
                  </div>
                </div>
                <h5 style={{ color: "#053a93" }} className="text-uppercase font-weight-bold text-center mt-4 mb-0">
                  {v.title}
                </h5>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Section3;
