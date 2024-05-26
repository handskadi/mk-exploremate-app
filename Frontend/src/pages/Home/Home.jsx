import Footer from "../../compenents/Footer/Footer";
import Header from "../../compenents/Header/Header";
import styles from "./Home.module.css";
import Slider from "../../compenents/Slider/Slider";
import ProductsList from "../../compenents/ProductsList/ProductsList";
import PropTypes from "prop-types";
import CallToAction from "../../compenents/CallToAction/CallToAction";
import TopDestination from "../../compenents/TopDestination/TopDestination";

function Home({ products }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Slider />
        <div className={`${styles.homeContainer} ${styles.features}`}>
          Features
        </div>

        <TopDestination />
        <CallToAction />
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
