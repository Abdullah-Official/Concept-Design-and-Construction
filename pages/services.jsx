import Features from "../components/features";
import HeroSection from "../components/hero-section";
import Navbar from "../components/navbar";
import OtherServices from "../components/other-services";
import ServicesCommon from "../components/services-common";
import { ServicesData } from "../Data/services-data";
import styles from "../styles/Services.module.css";

function Services() {
  return (
    <div>
      {/* Navbar  */}
      <Navbar />

      {/* Hero Section  */}
      <HeroSection title="Our Services" />

      {/* Features Section  */}

    <Features />

      {/* Services  */}
      <div className="mt-5">
        <h2
          className="text-center font-weight-bold mb-4 pb-2 text-uppercase indigo-text"
          style={{ fontSize: 26 }}
          data-aos="zoom-in"
        >
          Services we provide
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-center mx-auto w-responsive mb-5">
          Construction is a full service construction company offering building
          solutions from start to finish. Our staff has been operating on USA
          for last many years.
        </p>
      </div>
      {ServicesData.map((v, i) => (
        <ServicesCommon
          key={i}
          heading={v.heading}
          details={v.details}
          btnTxt={v.btnTxt}
          img={v.img}
          id={v.id}
        />
      ))}

        {/* Other Services  */}

        <OtherServices />

    </div>
  );
}

export default Services;
