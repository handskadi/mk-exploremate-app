import styles from "./Slider.module.css";
import sliderImage from "../../image/slides/slide1.jpg";
import sliderImage2 from "../../image/slides/slide2.jpg";
import { useEffect, useState } from "react";

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
        <input type="text" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Slider;
