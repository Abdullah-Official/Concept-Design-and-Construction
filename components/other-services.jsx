import styles from "../styles/Services.module.css";

function OtherServices() {
  return (
    <div className="container my-4">
      <h2
        className="text-center font-weight-bold mb-4 pb-2 text-uppercase indigo-text"
        style={{ fontSize: 26 }}
        data-aos="zoom-in"
      >
        Other Services
      </h2>
      <div className="container mt-2">
        <div className="card-columns">
          <div className={`card mt-2 ${styles.card_others}`}>
            <div class="card-body text-muted">
              <ul className="list-group">
                <li className={`${styles.list_eff}`}>Additions & Remodels</li>
                <li className={`${styles.list_eff}`}>Appliances</li>
                <li className={`${styles.list_eff}`}>Architects & Engineers</li>
                <li className={`${styles.list_eff}`}>Bathrooms</li>
                <li className={`${styles.list_eff}`}>Cabinets & Countertops</li>
                <li className={`${styles.list_eff}`}>Carpentry</li>
                <li className={`${styles.list_eff}`}>Carpet</li>
                <li className={`${styles.list_eff}`}>
                  Cleaning & Maid Service
                </li>
                <li className={`${styles.list_eff}`}>
                  Concrete, Brick & Stone
                </li>
                <li className={`${styles.list_eff} `}>Decks & Porches</li>
              </ul>
            </div>
          </div>
          <div className={`card mt-2 ${styles.card_others}`}>
            <div className="card-body text-muted">
              <ul className="list-group">
                <li className={` ${styles.list_eff}`}>
                  Driveways, Patios & Walks
                </li>
                <li className={` ${styles.list_eff}`}>Drywall & Insulation</li>
                <li className={` ${styles.list_eff}`}>Electrical Computers</li>
                <li className={` ${styles.list_eff}`}>Fences</li>
                <li className={` ${styles.list_eff}`}>Flooring Hardwood</li>
                <li className={` ${styles.list_eff}`}>
                  Garages, Doors, Openers
                </li>
                <li className={` ${styles.list_eff}`}>Handyman Services</li>
                <li className={` ${styles.list_eff}`}>Heating & Cooling</li>
                <li className={` ${styles.list_eff}`}>Kitchens</li>
                <li className={` ${styles.list_eff}`}>Landscape</li>
              </ul>
            </div>
          </div>
          <div className={`card mt-2 ${styles.card_others}`}>
            <div className="card-body text-muted">
              <ul className="list-group">
                <li className={` ${styles.list_eff}`}>Lawncare Sprinklers</li>
                <li className={` ${styles.list_eff}`}>Painting & Staining</li>
                <li className={` ${styles.list_eff}`}>Plumbing</li>
                <li className={` ${styles.list_eff}`}>Remodels</li>
                <li className={` ${styles.list_eff}`}>Roofign & Gutters</li>
                <li className={` ${styles.list_eff}`}>Siding</li>
                <li className={` ${styles.list_eff}`}>Swimming Pools & Spas</li>
                <li className={` ${styles.list_eff}`}>Tile & Stone</li>
                <li className={` ${styles.list_eff}`}>Walls & Ceilings</li>
                <li className={` ${styles.list_eff}`}>Windows & Doors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherServices;
