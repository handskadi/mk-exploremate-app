import styles from "./Slider.module.css";
import sliderImage from "../../image/slides/slide3.jpg";
import sliderImage2 from "../../image/slides/slide4.jpg";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faHotel,
  faMap,
  faPersonHiking,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Slider() {
  const [currentImage, setCurrentImage] = useState(sliderImage);

  useEffect(() => {
    const imageArray = [sliderImage, sliderImage2];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % imageArray.length;
      setCurrentImage(imageArray[currentIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

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
        <input type="text" placeholder="Search your product..!" />
        <button>
          <FontAwesomeIcon icon={faSearch} /> Search
        </button>
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

export default Slider;
