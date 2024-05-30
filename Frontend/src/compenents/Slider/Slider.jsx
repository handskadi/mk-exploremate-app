import styles from "./Slider.module.css";
import sliderImage from "../../image/slides/slide3.jpg";
import sliderImage2 from "../../image/slides/slide4.jpg";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import {
  faCar,
  faHotel,
  faMap,
  faPersonHiking,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Slider({ state }) {
  const [currentImage, setCurrentImage] = useState(sliderImage);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const imageArray = [sliderImage, sliderImage2];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % imageArray.length;
      setCurrentImage(imageArray[currentIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTours = state.tours?.filter((tour) =>
    tour.title.toLowerCase().includes(searchQuery?.toLowerCase())
  );
  return (
    <div
      className={`${styles.slider}`}
      style={{
        backgroundImage: currentImage ? `url(${currentImage})` : "none",
      }}
    >
      <h2>MK ExploreMate app</h2>
      <p>Explore the world with Mk ExploreMate app</p>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search your product..!"
          onChange={handleSearch}
        />
        <button>
          <FontAwesomeIcon icon={faSearch} /> Search
        </button>
        <div
          className={styles.searchResults}
          style={{ display: searchQuery && "block" }}
        >
          {filteredTours.map((tour) => (
            <p key={tour.id}>
              <span>{tour.title}</span>
            </p>
          ))}
        </div>
      </div>

      <div className={styles.productIcons}>
        <button>
          <FontAwesomeIcon icon={faMap} /> <span>Tours</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faHotel} /> <span>Accomodation</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faPersonHiking} /> <span>Experience</span>
        </button>
        <button>
          <FontAwesomeIcon icon={faCar} /> <span>Car Rental</span>
        </button>
      </div>
    </div>
  );
}
Slider.propTypes = {
  state: PropTypes.object,
};

export default Slider;
