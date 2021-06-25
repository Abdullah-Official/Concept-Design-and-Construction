import Image from "next/image";
import styles from "../styles/Services.module.css";

function ServicesCommon(props) {
  return (
    <div className="container mt-5">
      <section
        className="dark-grey-text"
        data-aos="fade-in"
        data-aos-delay="300"
      >
        <div
          className="row align-items-center"
          style={
            props.id % 2 === 0
              ? { flexDirection: "row-reverse" }
              : { flexDirection: "row" }
          }
        >
          <div className="col-lg-5 col-xl-4">
            <div className="view overlay rounded z-depth-1-half mb-lg-0 mb-5">
              <Image
                className="img-fluid"
                src={props.img}
                width={250}
                height={200}
                layout="responsive"
              />
              <a>
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>
          </div>

          <div className="col-lg-7 col-xl-8">
            <h4 className="font-weight-bold mb-3" style={{ color: "#053a93" }}>
              <strong>{props.heading}</strong>
            </h4>
            <p className="dark-grey-text" style={{ textAlign: "justify" }}>
              {props.details}
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <a
                href="/contact"
                s
                target="_blank"
                className={`btn btn-md mx-0 btn-rounded ${styles.btn_about}`}
              >
                {props.btnTxt}
              </a>
            </div>
          </div>
        </div>

        <hr className="my-5" />
      </section>
    </div>
  );
}

export default ServicesCommon;
