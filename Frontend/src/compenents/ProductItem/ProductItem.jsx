import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faLocationDot,
  faTriangleExclamation,
  faUserCheck,
  faUserGroup,
  faCircleCheck,
  faListCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarCheck,
  faCircleXmark,
  faCirclePause,
} from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProductItem({ product, dispatch }) {
  const {
    title,
    location,
    duration,
    code,
    status,
    isPrivateTour,
    rate,
    image,
    isTopTour,
    excerpt,
    userID,
    included,
    notIncluded,
    additionalInfo,
    itinerary,
  } = product;

  const [ispanelOpen, setIsPanelOpen] = useState(false);
  const [upDateStatus, setUpdateStatus] = useState(status);
  const [updateIsPrivate, setUpdateIsPrivate] = useState(isPrivateTour);
  const [updateIsTopTour, setUpdateIsTopTour] = useState(isTopTour);

  const deleteProduct = () => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete the product "${title}"?`
    );
    if (isConfirmed) {
      dispatch({ type: "deleteProduct", payload: { code } });
      window.alert(`The product "${title}" has been deleted.`);
    }
  };
  const updatedProduct = {
    title,
    excerpt,
    duration,
    location,
    code,
    rate,
    image,
    userID,
    included,
    notIncluded,
    additionalInfo,
    itinerary,
    status: upDateStatus,
    isPrivateTour: updateIsPrivate,
    isTopTour: updateIsTopTour,
  };

  function handleProductUpdate(e) {
    e.preventDefault();
    dispatch({ type: "updateTour", payload: { product: updatedProduct } });
    setIsPanelOpen(!ispanelOpen);
  }

  return (
    <>
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
            <Link to={`/product/${code}`} className={styles.primaryColor}>
              view product
            </Link>
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
          <Button type="O" onClick={() => deleteProduct()}>
            <FontAwesomeIcon icon={faTrash} /> Remove
          </Button>
          <Button type="P" onClick={() => setIsPanelOpen(!ispanelOpen)}>
            {" "}
            <FontAwesomeIcon icon={faListCheck} /> Manage
          </Button>
        </div>
      </section>

      <div
        className={styles.productManagementPanel}
        style={{ display: ispanelOpen ? "block" : "none" }}
      >
        <div className={styles.innerPanel}>
          <h3>Product Settings</h3>
          <form onSubmit={handleProductUpdate}>
            <div className={styles.parmContainer}>
              <select
                value={upDateStatus}
                onChange={(e) => setUpdateStatus(e.target.value)}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pause">Pause</option>
              </select>
            </div>
            <div className={styles.parmContainer}>
              <select
                value={updateIsPrivate ? "private" : "shared"}
                onChange={(e) =>
                  setUpdateIsPrivate(e.target.value === "private")
                }
              >
                <option value="private">Private</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className={styles.parmContainer}>
              <input
                type="checkbox"
                checked={updateIsTopTour}
                onChange={(e) => setUpdateIsTopTour(e.target.checked)}
              />
              <label>Top Tour</label>
            </div>
            <Button>Save Changes</Button>
          </form>
        </div>
        <button
          className={styles.closeBtn}
          onClick={(e) => {
            e.preventDefault();
            setIsPanelOpen(!ispanelOpen);
          }}
        >
          X
        </button>
      </div>
    </>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
};

export default ProductItem;
