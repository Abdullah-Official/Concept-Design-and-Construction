import Image from "next/image";
import styles from '../styles/Services.module.css'

function Features() {
  return (
    <div className="container-fluid my-5 p-5 =">
      <section className="text-center dark-grey-text">
        <h1 className="font-weight-bold mb-4 pb-4" data-aos="fade-up" style={{fontFamily:'Raleway', letterSpacing:2}}>Our Features</h1>

        <div className="row">
          <div className={`col-md-4 mb-4 ${styles.features}`} data-aos="fade-left">
            <Image src="/images/sketch.png" width={70} height={70} />
            <h5 style={{fontFamily:'sans-serif'}} className="font-weight-bold my-4">Creative Plan & Design</h5>
            <p className="grey-text mb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </div>

          <div className={`col-md-4 mb-4 ${styles.features}`} data-aos="fade-in">
          <Image src="/images/helmet.png" width={70} height={70} />
            <h5 style={{fontFamily:'sans-serif'}} className="font-weight-bold my-4">Talented Peoples</h5>
            <p className="grey-text mb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </div>
          <div className={`col-md-4 mb-4 ${styles.features}`} data-aos="fade-right">
          <Image src="/images/settings.png" width={70} height={70} />
            <h5 style={{fontFamily:'sans-serif'}} className="font-weight-bold my-4">Modern Tools</h5>
            <p className="grey-text mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
