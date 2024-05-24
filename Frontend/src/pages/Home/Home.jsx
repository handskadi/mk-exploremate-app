import Footer from "../../compenents/Footer/Footer";
import Header from "../../compenents/Header/Header";
import styles from "./Home.module.css";
import Slider from "../../compenents/Slider/Slider";
import ProductsList from "../../compenents/ProductsList/ProductsList";
import PropTypes from "prop-types";

function Home({ products }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Slider />
        <div className={`${styles.homeContainer} ${styles.features}`}>
          Features
        </div>
        <div className={`${styles.homeContainer} ${styles.topDestination}`}>
          TopDestination
        </div>
        <div className={`${styles.homeContainer} ${styles.callToAction}`}>
          CallToAction
        </div>
        <ProductsList products={products} />
        <div className={`${styles.homeContainer} ${styles.customerReviews}`}>
          CustomerReviews
        </div>
        <div className={`${styles.homeContainer} ${styles.footerDetails}`}>
          FooterDetails
        </div>
      </div>
      <Footer />
    </>
  );
}

Home.propTypes = {
  products: PropTypes.array.isRequired,
};
export default Home;
