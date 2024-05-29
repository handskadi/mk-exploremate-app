import Header from "../../compenents/Header/Header";
import PropTypes from "prop-types";

function About({ products,
  wishlistCount,
  setWishlistCount,
  addTpCartCount,
  setAddTpCartCount,
  isLoggedIn,
  setIsLoggedIn,}) {
  return <Header products={products}
  wishlistCount={wishlistCount}
        setWishlistCount={setWishlistCount}
        addTpCartCount={addTpCartCount}
        setAddTpCartCount={setAddTpCartCount}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}/>;
}

About.propTypes = {
  products: PropTypes.array,
  wishlistCount: PropTypes.number,
  setWishlistCount: PropTypes.func,
  addTpCartCount: PropTypes.number,
  setAddTpCartCount: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  setIsLoggedIn: PropTypes.func,
};
export default About;
