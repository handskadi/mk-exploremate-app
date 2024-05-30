import HomeProductItem from "../HomeProductItem/HomeProductItem";
import styles from "./ProductsList.module.css";
import PropTypes from "prop-types";

const MAX_TOURS = 4;

function ProductsList({ state, dispatch }) {
  const { tours } = state;
  const limitedProducts = tours.slice(0, MAX_TOURS);

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
          dispatch={dispatch}
          state={state}
        />
      ))}
    </div>
  );
}

ProductsList.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};

export default ProductsList;
