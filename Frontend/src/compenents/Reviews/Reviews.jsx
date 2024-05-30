import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Reviews.module.css";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

function Reviews({ state }) {
  const { reviews } = state;
  return (
    <div className={styles.container}>
      <div className={styles.reviews}>
        <div className={styles.sectionTitle}>
          <h2>Reviews</h2>
          <p>What people say about us!</p>
        </div>
        <div className={styles.reviewCards}>
          <Carousel
            showThumbs={false}
            showArrows={true}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
          >
            {reviews.map((review) => (
              <Review review={review} key={review.id} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

function Review({ review }) {
  return (
    <div className={styles.reviewCard}>
      <span className={styles.author}>{review.author}</span>
      <h3>{review.reviewTitle}</h3>
      <span className={styles.rate}>
        {review.ratingScore === 1 && (
          <>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarEmpty} />
            <FontAwesomeIcon icon={faStarEmpty} />
            <FontAwesomeIcon icon={faStarEmpty} />
            <FontAwesomeIcon icon={faStarEmpty} />
          </>
        )}
        {review.ratingScore === 2 && (
          <>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarEmpty} />
            <FontAwesomeIcon icon={faStarEmpty} />
            <FontAwesomeIcon icon={faStarEmpty} />
          </>
        )}
        {review.ratingScore === 3 && (
          <>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarEmpty} />
            <FontAwesomeIcon icon={faStarEmpty} />
          </>
        )}
        {review.ratingScore === 4 && (
          <>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarEmpty} />
          </>
        )}
        {review.ratingScore === 5 && (
          <>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </>
        )}
      </span>
      <p>{review.reviewDescription}</p>
      <span className={styles.date}>{review.date}</span>
    </div>
  );
}

Reviews.propTypes = {
  state: PropTypes.object,
};

Review.propTypes = {
  review: PropTypes.object,
};

export default Reviews;
