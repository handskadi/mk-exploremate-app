import { useEffect, useState } from "react";
import Footer from "../../compenents/Footer/Footer";
import Header from "../../compenents/Header/Header";
import styles from "./Product.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faClock,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCircleCheck,
  faMapPin,
  faPeopleGroup,
  faPersonWalkingLuggage,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

function Product({ dispatch, state }) {
  const productID = useParams();

  const [formData, setFormData] = useState({
    bookingDate: "",
    adults: "",
    children: "",
    roomType: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission here
  };

  const product = state.tours.find((product) => product.code === productID.id);
  const filteredReviews = state?.reviews.filter(
    (review) => product?.code === review?.tourID
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={styles.masterContainer}>
      <Header state={state} dispatch={dispatch} />

      <div className={styles.container}>
        <h1>
          {product?.title} - <FontAwesomeIcon icon={faClock} />{" "}
          {product?.duration} Days
        </h1>
        <div className={styles.header}>
          <div className={styles.photos}>
            <img src="http://localhost:5174/images/tours/image4.jpg" />
            <img src="http://localhost:5174/images/tours/image2.jpg" />
            <img src="http://localhost:5174/images/tours/image3.jpg" />
            <img src="http://localhost:5174/images/tours/image1.jpg" />
          </div>
          <div className={styles.photo}>
            <img src={product?.image} />
            <button
              onClick={() => {
                dispatch({ type: "productAddedToWishList", payload: product });
                dispatch({ type: "addToWishList" });
              }}
            >
              <FontAwesomeIcon icon={faHeart} /> Add to Wish List
            </button>
          </div>
          <div className={styles.bookingWidget}>
            <form onSubmit={handleSubmit} className={styles.bookigForm}>
              <div className={styles.formGroup}>
                <input
                  type="date"
                  id="booking-date"
                  name="bookingDate"
                  value={formData.bookingDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <select
                  id="adults"
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Adults
                  </option>
                  {[...Array(10)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <select
                  id="children"
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Children
                  </option>
                  {[...Array(10)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  id="special-requests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Note..."
                ></textarea>
              </div>

              <button type="submit">Book Now</button>
            </form>
          </div>
        </div>
        <div className={styles.detainSection}>
          <span>
            <FontAwesomeIcon icon={faClock} /> Duration: {product?.duration}{" "}
            Days
          </span>{" "}
          |{" "}
          <span>
            <FontAwesomeIcon icon={faMapPin} /> {product?.location}
          </span>{" "}
          |{" "}
          <span>
            <FontAwesomeIcon icon={faUserCheck} />{" "}
            {product?.isPrivateTour ? "Private Tour" : "Shared Tour"}
          </span>{" "}
          |{" "}
          <span>
            <FontAwesomeIcon icon={faPeopleGroup} /> Up to 20 Pax
          </span>{" "}
          | <span>Product code: {productID.id} </span>
        </div>
        <div className={styles.contentSection}>
          <div className={styles.contentInnerSection}>
            <h3 className={styles.productTitle}>
              {product?.title} <FontAwesomeIcon icon={faPersonWalkingLuggage} />
            </h3>
            <p>{product?.excerpt}</p>
          </div>
          <div className={styles.contentInnerSection}>
            <h3>What is included?</h3>
            {product?.included ? (
              <ul className={styles.included}>
                {product?.included.map((item, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={faCircleCheck} /> {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No content in incclusions ...</p>
            )}
          </div>
          <div className={styles.contentInnerSection}>
            <h3>What is Not included?</h3>
            {product?.notIncluded ? (
              <ul className={styles.notIncluded}>
                {product.notIncluded.map((item, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={faCircleXmark} /> {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No content in exclusions ...</p>
            )}
          </div>
          <div className={styles.contentInnerSection}>
            <h3>Tour Details</h3>
            {product?.itinerary ? (
              <ul className={styles.itinerary}>
                <h3>{product.itinerary.length} Days</h3>
                {product.itinerary.map((day, index) => (
                  <li key={index}>
                    <h4> {day.day}</h4>
                    {day.stops.map((stop, stopIndex) => (
                      <div key={stopIndex}>
                        <h5>{stop.title}:</h5>
                        <p>{stop.description}</p>
                      </div>
                    ))}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No content in details ...</p>
            )}
          </div>
          <div className={styles.contentInnerSection}>
            <h3>Additional Info</h3>
            {product?.additionalInfo ? (
              <ul>
                {product?.additionalInfo.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>No content in Adtional Ino ...</p>
            )}
          </div>
          <div className={styles.contentInnerSection}>
            <h3>Reviews</h3>
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review, index) => (
                <div key={index}>
                  <p>{review?.date}</p>
                  <p>
                    {state?.users.map((user) => {
                      if (user.id === review?.userID) {
                        return <span key={user.id}>{user?.accountName}</span>;
                      }
                      return null;
                    })}
                  </p>
                  <p>{review?.reviewTitle}</p>
                  <p>{review?.reviewDescription}</p>
                  <p>{stars(review?.ratingScore)}</p>
                  <hr />
                </div>
              ))
            ) : (
              <p>No Reviews...</p>
            )}
          </div>
          <div className={styles.relatedProducts}>
            <h3>Related /similar Products</h3>
            Related /similar Products
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function stars(rating) {
  let stars;
  switch (rating) {
    case 1:
      stars = <>⭐</>;
      break;
    case 2:
      stars = <>⭐⭐</>;
      break;
    case 3:
      stars = <>⭐⭐⭐</>;
      break;
    case 4:
      stars = <>⭐⭐⭐⭐</>;
      break;
    case 5:
      stars = <>⭐⭐⭐⭐⭐</>;
      break;
    default:
      stars = null;
  }

  return stars;
}

Product.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};

export default Product;
