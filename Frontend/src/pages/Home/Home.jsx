import Footer from "../../compenents/Footer/Footer";
import Header from "../../compenents/Header/Header";
import styles from "./Home.module.css";
import Slider from "../../compenents/Slider/Slider";
import ProductsList from "../../compenents/ProductsList/ProductsList";
import PropTypes from "prop-types";
import CallToAction from "../../compenents/CallToAction/CallToAction";
import TopDestination from "../../compenents/TopDestination/TopDestination";
import HomeFeatures from "../../compenents/HomeFeatures/HomeFeatures";
import Reviews from "../../compenents/Reviews/Reviews";
import HomeFooterDetails from "../../compenents/HomeFooterDetails/HomeFooterDetails";
function Home({
  products,
  wishlistCount,
  setWishlistCount,
  addTpCartCount,
  setAddTpCartCount,
  reviews,
  isLoggedIn,
  setIsLoggedIn,
}) {
  return (
    <>
      <Header
        wishlistCount={wishlistCount}
        setWishlistCount={setWishlistCount}
        addTpCartCount={addTpCartCount}
        setAddTpCartCount={setAddTpCartCount}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <div className={styles.container}>
        <Slider />
        <HomeFeatures />

        <TopDestination />
        <CallToAction />
        <ProductsList
          products={products}
          wishlistCount={wishlistCount}
          setWishlistCount={setWishlistCount}
          addTpCartCount={addTpCartCount}
          setAddTpCartCount={setAddTpCartCount}
        />
        <Reviews reviews={reviews} />
        <HomeFooterDetails />
      </div>
      <Footer />
    </>
  );
}

Home.propTypes = {
  products: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  wishlistCount: PropTypes.number,
  setWishlistCount: PropTypes.func,
  addTpCartCount: PropTypes.number,
  setAddTpCartCount: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  setIsLoggedIn: PropTypes.func,
};
export default Home;
