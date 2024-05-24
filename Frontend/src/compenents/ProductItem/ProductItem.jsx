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
import { useState } from "react";

function ProductItem({ product }) {
  console.log(product);
  const [productTitle, setProductTitle] = useState(product.title);
  const [productLocation, setProductLocation] = useState(product.location);
  const [ProductDuration, setProductDuration] = useState(product.duration);
  const [productCode, setProductCode] = useState(product.code);
  const [productStatus, setProductStatus] = useState(product.status);
  const [isPrivate, setIsPrivate] = useState(product.isPrivateTour);
  const [rateStatus, setRateStatus] = useState(product.rate);
  const [image, setImage] = useState(product.image);

  /* Temporal fix for Eslint unused-vars*/
  () => {
    setProductTitle();
    setProductLocation();
    setProductDuration();
    setProductCode();
    setProductStatus();
    setIsPrivate();
    setRateStatus();
    setImage();
  };

  return (
    <section className={styles.product}>
      <div className={styles.productMedia}>
        <img src={image} alt={productTitle} />
        {productStatus === "active" && (
          <span className={styles.statusActive}>
            <FontAwesomeIcon icon={faCircleCheck} /> Active
          </span>
        )}
        {productStatus === "inactive" && (
          <span className={styles.statusInactive}>
            <FontAwesomeIcon icon={faCircleXmark} /> Inactive
          </span>
        )}
        {productStatus === "pause" && (
          <span className={styles.statusPause}>
            <FontAwesomeIcon icon={faCirclePause} /> Pause
          </span>
        )}
      </div>
      <div className={styles.productDetails}>
        <h2>{productTitle}</h2>
        <p>
          <span>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={styles.warningColor}
            />{" "}
            {productLocation}
          </span>{" "}
          |{" "}
          <span>
            <FontAwesomeIcon
              icon={faCalendarCheck}
              className={styles.primaryColor}
            />{" "}
            {ProductDuration} Days
          </span>{" "}
          |{" "}
          {isPrivate ? (
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
        <span>Product code: {productCode} </span>|{" "}
        <span>
          <a href="#" className={styles.primaryColor}>
            view your product
          </a>
        </span>{" "}
        |
        {rateStatus === "good" && (
          <span className={styles.primaryColor}>
            <strong>
              {" "}
              <FontAwesomeIcon icon={faCircleCheck} /> Good
            </strong>
          </span>
        )}
        {rateStatus === "average" && (
          <span className={styles.warningColor}>
            <strong>
              {" "}
              <FontAwesomeIcon icon={faTriangleExclamation} /> Average
            </strong>
          </span>
        )}
        {rateStatus === "poor" && (
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
