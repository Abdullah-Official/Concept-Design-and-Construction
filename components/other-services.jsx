import styles from "../styles/Services.module.css";

function OtherServices() {
  return (
    <div
      className={`container-fluid  pb-2 mx-auto p-3 mb-5 ${styles.other_services}`}
      data-aos="zoom-in-down"
    >
      <h1 className="text-center mb-4 text-white text-uppercase font-weight-bold">
        Other Services
      </h1>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link  active"
            style={{ color: "#0f51b3" }}
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            <i className="far fa-2x fa-caret-square-down"></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link "
            style={{ color: "#0f51b3" }}
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            <i className="far fa-2x fa-caret-square-down"></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link "
            style={{ color: "#0f51b3" }}
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            <i className="far fa-2x fa-caret-square-down"></i>
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane p-4 fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <ul class="list-group">
            <li className={`list-group-item ${styles.list_eff}`}>
              Additions & Remodels
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>Appliances</li>
            <li className={`list-group-item ${styles.list_eff}`}>
              Architects & Engineers
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>Bathrooms</li>
            <li className={`list-group-item ${styles.list_eff}`}>
              Cabinets & Countertops
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>Carpentry</li>
            <li className={`list-group-item ${styles.list_eff}`}>Carpet</li>
            <li className={`list-group-item ${styles.list_eff}`}>
              Cleaning & Maid Service
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>
              Concrete, Brick & Stone
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>
              Decks & Porches
            </li>
          </ul>
        </div>
        <div
          className="tab-pane p-4 fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <ul class="list-group">
            <li className={`list-group-item ${styles.list_eff}`}>
              Driveways, Patios & Walks
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>
              Drywall & Insulation
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>
              Electrical Computers
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>Fences</li>
            <li className={`list-group-item ${styles.list_eff}`}>
              Flooring Hardwood
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>
              Garages, Doors, Openers
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>
              Handyman Services
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>
              Heating & Cooling
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>Kitchens</li>
            <li className={`list-group-item ${styles.list_eff}`}>Landscape</li>
          </ul>
        </div>
        <div
          className="tab-pane p-4 fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <ul class="list-group">
            <li className={`list-group-item ${styles.list_eff}`}>
              Lawncare Sprinklers
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>
              Painting & Staining
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>Plumbing</li>
            <li className={`list-group-item ${styles.list_eff}`}>Remodels</li>
            <li className={`list-group-item ${styles.list_eff}`}>
              Roofign & Gutters
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>Siding</li>
            <li className={`list-group-item ${styles.list_eff}`}>
              Swimming Pools & Spas
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>
              Tile & Stone
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>
              Walls & Ceilings
            </li>
            <li className={`list-group-item ${styles.list_eff}`}>
              Windows & Doors
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OtherServices;
