import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
  faHeart,
  faLocationDot,
  faRoadCircleCheck,
  faTriangleExclamation,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import {
  faClock,
  faHeart as faHeartEmpty,
} from "@fortawesome/free-regular-svg-icons";
import styles from "./HomeProductItem.module.css";
import Button from "./../Button/Button";
import { useState } from "react";

function HomeProductItem({ product }) {
  const [isAddedToWishList, SetIsAddedToWishList] = useState(false);
  return (
    <div className={styles.productCard}>
      <div className={styles.productMedia}>
        <img src={product.image} alt={product.title} />
        {product.rate === "good" && (
          <span className={`${styles.ratingBadge} ${styles.good}`}>
            <FontAwesomeIcon icon={faCircleCheck} /> Good
          </span>
        )}
        {product.rate === "average" && (
          <span className={`${styles.ratingBadge} ${styles.average}`}>
            <FontAwesomeIcon icon={faTriangleExclamation} /> Average
          </span>
        )}
        {product.rate === "poor" && (
          <span className={`${styles.ratingBadge} ${styles.poor}`}>
            <FontAwesomeIcon icon={faCircleExclamation} /> Poor
          </span>
        )}
        <span className={styles.categoryBadge}>
          <FontAwesomeIcon icon={faRoadCircleCheck} /> Tour
        </span>
        <span
          className={styles.wishListHeaert}
          onClick={() => {
            SetIsAddedToWishList(!isAddedToWishList);
          }}
        >
          {isAddedToWishList ? (
            <FontAwesomeIcon icon={faHeart} />
          ) : (
            <FontAwesomeIcon icon={faHeartEmpty} />
          )}
        </span>
      </div>
      <div className={styles.productInfo}>
        <span>
          <FontAwesomeIcon icon={faClock} />
          {product.duration} Days
        </span>
        |
        <span>
          <FontAwesomeIcon icon={faLocationDot} /> {product.location}
        </span>
        |
        <span>
          <FontAwesomeIcon icon={faUserCheck} />{" "}
          {product.isPrivateTour ? "Private" : "Shared"}
        </span>
      </div>
      <div className={styles.productDetails}>
        <h4>{product.title}</h4>
        <p>{product.excerpt}</p>
      </div>
      <div className={styles.productButtons}>
        <Button fontSize="13px">Book Now</Button>
        <Button type="O" fontSize="13px">
          View Details
        </Button>
      </div>
    </div>
  );
}
HomeProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default HomeProductItem;
