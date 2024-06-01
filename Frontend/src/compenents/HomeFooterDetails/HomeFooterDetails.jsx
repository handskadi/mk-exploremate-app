import styles from "./HomeFooterDetails.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const HomeFooterDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footweDetails}>
        <div className={styles.sectionTitle}>
          <h2>Get in Touch with Us!</h2>
          <p>Contact Us for Any Inquiries or Assistance</p>
        </div>
        <div className={styles.footerCards}>
          <div className={styles.footerCard}>
            <img src="http://127.0.0.1:5174/images/logo.png" alt="" />
          </div>
          <div className={styles.footerCard}>
            <h3>Contact Info</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faPhone} /> +212 651 456 226
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> contact@exploremate.com
              </li>
              <li>
                <FontAwesomeIcon icon={faGlobe} /> www.exploremate.com
              </li>
            </ul>
          </div>
          <div className={styles.footerCard}>
            <h3>About</h3>
            <p>
              MK ExploreMate is a travel app for both travelers and providers.
              Providers can list their products, and travelers can book these
              products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooterDetails;
