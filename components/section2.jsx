import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Section2 = () => {
  return (
    <div className={`${styles.sec2_main} container`}>
      <div className="container ">
        <section className="dark-grey-text">
          <div className="row pr-lg-5">
            <div className={`col-md-7 ${styles.sec2_div1}`}>
              <div className="view">
                <Image
                  src="/images/sec2-img.png"
                  alt="Picture of the author"
                  width={550}
                  height={400}
                  className={`img-fluid ${styles.img_sec2}`}
                />
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-sm-12 col-12 d-flex align-items-center">
              <div>
                <h3 className={`font-weight-bold mb-3 ${styles.heading_sec2}`}>
                  Company Overview
                </h3>

                <p className="text-black">
                  Lorem ipsum dolor sit amet consectetur adip elit. Maiores
                  deleniti explicabo voluptatem quisquam nulla asperiores
                  aspernatur aperiam voluptate et consectetur minima delectus,
                  fugiat eum soluta blanditiis adipisci, velit dolore magnam.
                  Lorem ipsum dolor sit amet consectetur adip elit. Maiores
                  deleniti explicabo voluptatem quisquam nulla asperiores
                  aspernatur aperiam voluptate et consectetur minima delectus,
                  fugiat eum soluta blanditiis adipisci, velit dolore magnam.
                </p>

                <button
                  type="button"
                  className={`btn mx-0 text-white ${styles.btn_about}`}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section2;
