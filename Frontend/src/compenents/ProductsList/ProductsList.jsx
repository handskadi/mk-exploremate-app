import HomeProductItem from "../HomeProductItem/HomeProductItem";
import styles from "./ProductsList.module.css";
import PropTypes from "prop-types";

function ProductsList({
  products,
  wishlistCount,
  setWishlistCount,
  addTpCartCount,
  setAddTpCartCount,
}) {
  const MAX_TOURS = 3;
  const limitedProducts = products.slice(0, MAX_TOURS);

  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <h2>Top Tours</h2>
        <p>Discover Morocco with Mk ExploreMate!</p>
      </div>
      {limitedProducts.map((product, index) => (
        <HomeProductItem
          product={product}
          key={index}
          wishlistCount={wishlistCount}
          setWishlistCount={setWishlistCount}
          addTpCartCount={addTpCartCount}
          setAddTpCartCount={setAddTpCartCount}
        />
      ))}
    </div>
  );
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      isPrivateTour: PropTypes.bool.isRequired,
      rate: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  wishlistCount: PropTypes.number,
  setWishlistCount: PropTypes.func,
  addTpCartCount: PropTypes.number,
  setAddTpCartCount: PropTypes.func,
};

export default ProductsList;
