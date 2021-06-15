import styles from "../styles/About.module.css";

function HeroSection(props) {
  return (
    <div className={`card card-image ${styles.jumbortron_about}`}>
      <div style={{height:'100%', width:'100%'}} className="text-white text-center rgba-stylish-strong py-5 mt-4 px-4">
        <div className="py-5" style={{justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column'}}>
          <h1 className="h1 orange-text mb-3 text-center" data-aos="fade-up" >{props.title}</h1>
          <p className={`mb-4 pb-2 px-md-5 mt-2 w-75 text-center mx-md-5 ${styles.hero_txt}`} data-aos="fade-up" data-aos-delay="200">
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
