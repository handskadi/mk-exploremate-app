import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
  faHeartCircleCheck,
  faHeartCirclePlus,
  faLocationDot,
  faRoadCircleCheck,
  faTriangleExclamation,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import styles from "./HomeProductItem.module.css";
import Button from "./../Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

function HomeProductItem({ product, dispatch }) {
  const [isAddedToWishList, SetIsAddedToWishList] = useState(false);
  const [isAddedtoCart, setIsAddedToCart] = useState(false);

  return (
    <div className={styles.productCard}>
      <div className={styles.productMedia}>
        <Link to={`/product/${product.code}`}>
          <img src={product.image} alt={product.title} />
        </Link>
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
            !isAddedToWishList
              ? dispatch({ type: "addToWishList" })
              : dispatch({ type: "removeFromWishList" });

            !isAddedToWishList
              ? dispatch({ type: "productAddedToWishList", payload: product })
              : dispatch({
                  type: "productToRemovedFromWishList",
                  payload: product,
                });
          }}
        >
          {isAddedToWishList ? (
            <FontAwesomeIcon icon={faHeartCircleCheck} />
          ) : (
            <FontAwesomeIcon
              icon={faHeartCirclePlus}
              style={{ color: "#186b6d" }}
            />
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
        <Button
          fontSize="13px"
          onClick={() => {
            setIsAddedToCart(!isAddedtoCart);
            !isAddedtoCart
              ? dispatch({ type: "addToCart" })
              : dispatch({ type: "removeFromCart" });
          }}
          bgColor={isAddedtoCart ? "#979797" : "#186b6d"}
        >
          {!isAddedtoCart ? "Add to Cart" : "Added"}
        </Button>

        <Button
          type="O"
          fontSize="13px"
          link={true}
          to={`/product/${product.code}`}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
HomeProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  setWishlistCount: PropTypes.func,
  dispatch: PropTypes.func,
};

export default HomeProductItem;
