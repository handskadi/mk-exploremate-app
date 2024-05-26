import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faLocationDot,
  faTriangleExclamation,
  faUserCheck,
  faUserGroup,
  faCircleCheck,
  faListCheck,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarCheck,
  faCircleXmark,
  faCirclePause,
} from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./ProductItem.module.css";

function ProductItem({ product }) {
  const {
    title,
    location,
    duration,
    code,
    status,
    isPrivateTour,
    rate,
    image,
  } = product;

  return (
    <section className={styles.product}>
      <div className={styles.productMedia}>
        <img src={image} alt={title} />
        {status === "active" && (
          <span className={styles.statusActive}>
            <FontAwesomeIcon icon={faCircleCheck} /> Active
          </span>
        )}
        {status === "inactive" && (
          <span className={styles.statusInactive}>
            <FontAwesomeIcon icon={faCircleXmark} /> Inactive
          </span>
        )}
        {status === "pause" && (
          <span className={styles.statusPause}>
            <FontAwesomeIcon icon={faCirclePause} /> Pause
          </span>
        )}
      </div>
      <div className={styles.productDetails}>
        <h2>
          {title} - {duration} Days
        </h2>
        <p>
          <span>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={styles.warningColor}
            />{" "}
            {location}
          </span>{" "}
          |{" "}
          <span>
            <FontAwesomeIcon
              icon={faCalendarCheck}
              className={styles.primaryColor}
            />{" "}
            {duration} Days
          </span>{" "}
          |{" "}
          {isPrivateTour ? (
            <span>
              <FontAwesomeIcon
                icon={faUserCheck}
                className={styles.primaryColor}
              />{" "}
              Private Tour
            </span>
          ) : (
            <span>
              <FontAwesomeIcon
                icon={faUserGroup}
                className={styles.primaryColor}
              />{" "}
              Shared Tour
            </span>
          )}
        </p>
        <span>Product code: {code} </span>|{" "}
        <span>
          <a href="#" className={styles.primaryColor}>
            view your product
          </a>
        </span>{" "}
        |
        {rate === "good" && (
          <span className={styles.primaryColor}>
            <strong>
              {" "}
              <FontAwesomeIcon icon={faCircleCheck} /> Good
            </strong>
          </span>
        )}
        {rate === "average" && (
          <span className={styles.warningColor}>
            <strong>
              {" "}
              <FontAwesomeIcon icon={faTriangleExclamation} /> Average
            </strong>
          </span>
        )}
        {rate === "poor" && (
          <span className={styles.dangerColor}>
            <strong>
              {" "}
              <FontAwesomeIcon icon={faCircleExclamation} /> Poor
            </strong>
          </span>
        )}
      </div>
      <div className={styles.productActions}>
        <Button type="O">
          <FontAwesomeIcon icon={faChartBar} /> Promote
        </Button>
        <Button type="P">
          {" "}
          <FontAwesomeIcon icon={faListCheck} /> Manage
        </Button>
      </div>
    </section>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
