import HomeProductItem from "../HomeProductItem/HomeProductItem";
import styles from "./ProductsList.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MAX_TOURS = 20;

function ProductsList({ state, dispatch }) {
  const { tours } = state;
  const limitedProducts = tours.slice(0, MAX_TOURS);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <h2>Top Tours</h2>
        <p>Discover Morocco with Mk ExploreMate!</p>
        <Link to="/all-products">All Tours</Link>
      </div>
      <Slider {...settings}>
        {limitedProducts.map((product, index) => (
          <HomeProductItem
            product={product}
            key={index}
            dispatch={dispatch}
            state={state}
          />
        ))}
      </Slider>
    </div>
  );
}

ProductsList.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};

export default ProductsList;
