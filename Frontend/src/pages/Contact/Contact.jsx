import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";
import MkIcon from "../../compenents/MkIcon/MkIcon";
import { useState } from "react";
import {
  faEnvelopeCircleCheck,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Contact({ state, dispatch }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Header state={state} dispatch={dispatch} />
      <div className={styles.container}>
        <div className={styles.dashHeader}>
          <div className={styles.suceessAdd}>
            <MkIcon height="50" width="50" />
            <div>
              <h3>Get in Touch with us</h3>
              <span>Your Adventure Starts with us</span>
            </div>
          </div>
        </div>

        <div className={styles.dashPanels}>
          <div className={styles.dashPanel}>
            <h3>Contact Information</h3>
            <div className={styles.statCards}>
              <div className={styles.statCard}>
                <p className={styles.statValue}>
                  <FontAwesomeIcon icon={faMapPin} />
                </p>
                <p className={styles.statLabel}>Location</p>
              </div>
              <div className={styles.statCard}>
                <p className={styles.statValue}>
                  <FontAwesomeIcon icon={faPhone} />
                </p>
                <p className={styles.statLabel}>+212-651-456-226</p>
              </div>
              <div className={styles.statCard}>
                <p className={styles.statValue}>
                  <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
                </p>
                <p className={styles.statLabel}>info@mkexploremate.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.dashPanels}>
          <div className={styles.dashPanel}>
            <h3>Contact Us Form</h3>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

Contact.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};

export default Contact;
