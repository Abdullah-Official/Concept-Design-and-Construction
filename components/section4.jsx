import React from "react";
import { Tweet } from "react-twitter-widgets";

const Section4 = () => {
  const year = new Date();
  const cp_year = year.getFullYear();
  return (
    <>
      <div style={{ position: "relative" }}>
        <div className="container my-5 p-5 mt-5">
          <div className="row">
            <div
              style={{ flexDirection: "column" }}
              class="col-md-4 mb-md-0 col-lg-6 col-12 col-sm-12 d-flex  justify-content-center align-items-center"
            >
              <h1
                className="text-center font-weight-bold mb-3 pb-2 mt-2 h1-responsive"
                style={{ color: "#053a93" }}
              >
                News and Insights{" "}
              </h1>
              <p
                style={{
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: 17,
                  opacity: 1,
                }}
                className="text-center lead font-bold  mx-1 mb-5"
              >
                See the latest news and trends in the industry by following us
                on twitter.
              </p>
            </div>

            <div className="col-md-8 mb-md-0 col-lg-6 col-12 col-sm-12 d-flex justify-content-center align-items-center ">
              <a
                className="twitter-timeline"
                data-width="400"
                data-height="400"
                data-theme="dark"
                href="https://twitter.com/ConceptDesConst?ref_src=twsrc%5Etfw"
              >
                Tweets by ConceptDesConst
              </a>{" "}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          color: "#FFF",
        }}
        className="footer-copyrigh text-white text-center bg-dark py-3"
      >
        © {cp_year} Copyright | Concept Design & Constructor | All Rights
        Reserved <br />
        <a style={{ color: "#fff" }} href="http://www.egriptechnologies.com/">
          {" "}
          Designed and Developed by{" "}
          <span style={{ fontWeight: "600", color: "#fff" }}>
            E-GRIP Technologies
          </span>
        </a>
      </div>
    </>
  );
};

export default Section4;
