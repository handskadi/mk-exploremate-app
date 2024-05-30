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
  const { tours } = state;
  return (
    <aside className={styles.aside}>
      <ul className={styles.productStats}>
        <li className={styles.productStatsMain}>
          <FontAwesomeIcon icon={faFontAwesome} />
          <span>{tours.length} items</span>{" "}
          <FontAwesomeIcon icon={faHandPointLeft} />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faCircleCheck}
            className={styles.primaryColor}
          />
          Active:
          <span>{countProductsByStatus(tours, "active")}</span>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className={styles.dangerColor}
          />
          Inactive:
          <span>{countProductsByStatus(tours, "inactive")}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCirclePause} className={styles.evenColor} />
          Paused:
          <span>{countProductsByStatus(tours, "pause")}</span>
        </li>
      </ul>
    </aside>
  );
}
Sidebar.propTypes = {
  state: PropTypes.object,
};

const countProductsByStatus = (products, status) => {
  return products.filter((product) => product.status === status).length;
};
export default Sidebar;
