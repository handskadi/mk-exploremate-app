import { useState } from "react";
import Footer from "../../compenents/Footer/Footer";
import Header from "../../compenents/Header/Header";
import styles from "./Product.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faMapPin,
  faPeopleGroup,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

function Product({ dispatch, state }) {
  const [formData, setFormData] = useState({
    bookingDate: "",
    adults: "",
    children: "",
    roomType: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission here
  };

  return (
    <div className={styles.masterContainer}>
      <Header state={state} dispatch={dispatch} />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.photos}>
            <img src="http://localhost:5174/images/tours/image4.jpg" />
            <img src="http://localhost:5174/images/tours/image2.jpg" />
            <img src="http://localhost:5174/images/tours/image3.jpg" />
            <img src="http://localhost:5174/images/tours/image1.jpg" />
          </div>
          <div className={styles.photo}>
            <img src="http://localhost:5174/images/tours/image4.jpg" />
          </div>
          <div className={styles.bookingWidget}>
            <form onSubmit={handleSubmit} className={styles.bookigForm}>
              <div className={styles.formGroup}>
                <input
                  type="date"
                  id="booking-date"
                  name="bookingDate"
                  value={formData.bookingDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <select
                  id="adults"
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Adults
                  </option>
                  {[...Array(10)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <select
                  id="children"
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Children
                  </option>
                  {[...Array(10)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  id="special-requests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Note..."
                ></textarea>
              </div>

              <button type="submit">Book Now</button>
            </form>
          </div>
        </div>
        <div className={styles.detainSection}>
          <span>
            <FontAwesomeIcon icon={faClock} /> Duration: 3 days
          </span>{" "}
          |{" "}
          <span>
            <FontAwesomeIcon icon={faMapPin} /> Marrakech
          </span>{" "}
          |{" "}
          <span>
            <FontAwesomeIcon icon={faUserCheck} /> Private Tour
          </span>{" "}
          |{" "}
          <span>
            <FontAwesomeIcon icon={faPeopleGroup} /> Up to 20 Pax
          </span>
        </div>
        <div className={styles.contentSection}>
          <div className={styles.contentInnerSection}>
            <h3>Marrakech to Merzouga Desert Tour</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vestibulum nunc ac tortor hendrerit ultricies. Aenean lobortis,
              tellus vel placerat varius, nisi est elementum lacus, quis
              tincidunt tellus est nec elit.
            </p>
          </div>
          <div className={styles.contentInnerSection}>
            <h3>What is included?</h3>
            <ul>
              <li>4x4 vehicle</li>
              <li>Tour Guide</li>
              <li>Desert Camp</li>
            </ul>
          </div>
          <div className={styles.contentInnerSection}>
            <h3>Tour Details</h3>
            <ul>
              <li>
                <h4>Day 1: Marrakech</h4>
                <p>
                  tellus vel placerat varius, nisi est elementum lacus, quis
                  tincidunt tellus est nec elit.
                </p>
              </li>
              <li>
                <h4>Day 2: Casablanca</h4>
                <p>
                  tellus vel placerat varius, nisi est elementum lacus, quis
                  tincidunt tellus est nec elit.
                </p>
              </li>
              <li>
                <h4>Day 3: Rabat</h4>
                <p>
                  tellus vel placerat varius, nisi est elementum lacus, quis
                  tincidunt tellus est nec elit.
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.contentInnerSection}>
            <h3>Additional Info</h3>
            <ul>
              <li>Ino 1</li>
              <li>Info 2</li>
              <li>Info 4</li>
            </ul>
          </div>
        </div>
        <div className={styles.relatedProducts}>Related /similar Products</div>
      </div>
      <Footer />
    </div>
  );
}

Product.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};

export default Product;
