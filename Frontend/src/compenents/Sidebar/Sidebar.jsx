import styles from "./Sidebar.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCirclePause,
  faFontAwesome,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { faHandPointLeft } from "@fortawesome/free-regular-svg-icons";

function Sidebar({ state }) {
  const { tours, loggedInUser } = state;
  return (
    <aside className={styles.aside}>
      <ul className={styles.productStats}>
        <li className={styles.productStatsMain}>
          <FontAwesomeIcon icon={faFontAwesome} />
          <span>{countAllProducts(tours, loggedInUser)} items</span>{" "}
          <FontAwesomeIcon icon={faHandPointLeft} />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faCircleCheck}
            className={styles.primaryColor}
          />
          Active:
          <span>{countProductsByStatus(tours, "active", loggedInUser)}</span>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className={styles.dangerColor}
          />
          Inactive:
          <span>{countProductsByStatus(tours, "inactive", loggedInUser)}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCirclePause} className={styles.evenColor} />
          Paused:
          <span>{countProductsByStatus(tours, "pause", loggedInUser)}</span>
        </li>
      </ul>
    </aside>
  );
}
Sidebar.propTypes = {
  state: PropTypes.object,
};

const countAllProducts = (products, loggedInUser) => {
  return products.filter(
    (product) => product && product.userID == loggedInUser.id
  ).length;
};
const countProductsByStatus = (products, status, loggedInUser) => {
  return products.filter(
    (product) => product.status == status && product.userID == loggedInUser.id
  ).length;
};
export default Sidebar;
