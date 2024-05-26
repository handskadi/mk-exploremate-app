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

function Sidebar({ products }) {
  return (
    <aside className={styles.aside}>
      <ul className={styles.productStats}>
        <li className={styles.productStatsMain}>
          <FontAwesomeIcon icon={faFontAwesome} />
          <span>{products.length} items</span>{" "}
          <FontAwesomeIcon icon={faHandPointLeft} />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faCircleCheck}
            className={styles.primaryColor}
          />
          Active:
          <span>{countProductsByStatus(products, "active")}</span>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className={styles.dangerColor}
          />
          Inactive:
          <span>{countProductsByStatus(products, "inactive")}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCirclePause} className={styles.evenColor} />
          Paused:
          <span>{countProductsByStatus(products, "pause")}</span>
        </li>
      </ul>
    </aside>
  );
}
Sidebar.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      isPrivateTour: PropTypes.bool.isRequired,
      rate: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const countProductsByStatus = (products, status) => {
  return products.filter((product) => product.status === status).length;
};
export default Sidebar;
