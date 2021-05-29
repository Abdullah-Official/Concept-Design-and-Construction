import styles from "../styles/About.module.css";

function HeroSection(props) {
  return (
    <div className={`card card-image ${styles.jumbortron_about}`}>
      <div className="text-white text-center rgba-stylish-strong py-5 mt-4 px-4">
        <div className="py-5">
          <h3 className="h3 orange-text" data-aos="fade-up" >{props.title}</h3>
          <h2 className="card-title h2 my-4 py-2" data-aos="fade-up" data-aos-delay="100">
            Concept Design & Constructors
          </h2>
          <p className="mb-4 pb-2 px-md-5 text-center mx-md-5" data-aos="fade-up" data-aos-delay="200">
            Concept Design & Constructor is a premier construction firm in Texas
            with an ambition to serve the infrastructure needs of clients
            throughout the state.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
