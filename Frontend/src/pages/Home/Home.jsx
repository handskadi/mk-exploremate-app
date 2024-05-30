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
function Home({ dispatch, state }) {
  return (
    <>
      <Header dispatch={dispatch} state={state} />
      <div className={styles.container}>
        <Slider />
        <HomeFeatures />

        <TopDestination />
        <CallToAction />
        <ProductsList dispatch={dispatch} state={state} />
        <Reviews state={state} />
        <HomeFooterDetails />
      </div>
      <Footer />
    </>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};
export default Home;
