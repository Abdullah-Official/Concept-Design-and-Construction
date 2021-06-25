import Features from "../components/features";
import HeroSection from "../components/hero-section";
import Navbar from "../components/navbar";
import OtherServices from "../components/other-services";
import ServicesCommon from "../components/services-common";
import { ServicesData } from "../Data/services-data";
import Head from "next/head";
import Footer from "../components/footer";

function Services() {
  return (
    <div>
      <Head>
        <title>Services</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Navbar  */}
      <Navbar />

      {/* Hero Section  */}
      <HeroSection
        title="What We Do ?"
        desc="Concept Design Constructor offers a variety of construction services to its clients. We approach every project with remarkable attention to detail

        and a passion for excellence."
      />

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
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center mx-auto w-responsive mb-5"
        >
          Concept Design & Constructor is a full service construction company
          offering building solutions from start to finish.
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
      <Footer />
    </div>
  );
}

export default Services;
