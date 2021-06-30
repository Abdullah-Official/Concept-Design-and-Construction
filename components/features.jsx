import Image from "next/image";
import { FeatureData } from "../Data/features";
import styles from "../styles/Services.module.css";

function Features() {
  return (
    <div className="container-fluid my-5 p-5 =">
      <section className="text-center dark-grey-text">
        <h1
          className="font-weight-bold mb-4 pb-4"
          data-aos="fade-up"
          style={{ fontFamily: "Raleway", letterSpacing: 2 }}
        >
          Our Features
        </h1>

        <div className="row">
          {FeatureData.map((v, i) => {
            return (
              <div
                key={i}
                className={`col-md-4 mb-4 ${styles.features}`}
                data-aos="fade-in"
              >
                <Image
                  src={v.img}
                  width={i === 0 ? 86 : 80}
                  height={i === 0 ? 80 : 80}
                />
                <h5
                  style={{ fontFamily: "sans-serif" }}
                  className="font-weight-bold my-4"
                >
                  {v.heading}
                </h5>
                <p className="grey-text mb-md-0">{v.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Features;
