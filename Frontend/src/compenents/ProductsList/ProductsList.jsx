import HomeProductItem from "../HomeProductItem/HomeProductItem";
import styles from "./ProductsList.module.css";
import PropTypes from "prop-types";

function ProductsList() {
  return (
    <div className={styles.container}>
      <HomeProductItem />
    </div>
  );
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      isPrivateTour: PropTypes.bool.isRequired,
      rate: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ProductsList;