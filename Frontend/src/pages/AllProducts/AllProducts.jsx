import styles from "./AllProducts.module.css";
import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import PropTypes from "prop-types";
import HomeProductItem from "../../compenents/HomeProductItem/HomeProductItem";
import { useEffect } from "react";

function AllProducts({ dispatch, state }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Header state={state} dispatch={dispatch} />
      <div className={styles.container}>
        <ProductsMain state={state} dispatch={dispatch} />
      </div>
      <Footer />
    </>
  );
}

function ProductsMain({ state, dispatch }) {
  const { tours } = state;
  return (
    <main className={styles.main}>
      <header className={styles.mainHeader}>
        <h1>Products</h1>
      </header>
      <article>
        {tours.map((product, index) => {
          return (
            //   <ProductItem product={product} dispatch={dispatch} key={index} />
            <HomeProductItem
              product={product}
              dispatch={dispatch}
              key={index}
            />
          );
        })}
      </article>
    </main>
  );
}

ProductsMain.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};

AllProducts.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};
export default AllProducts;
