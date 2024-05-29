import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import Main from "../../compenents/Main/Main";
import Sidebar from "../../compenents/Sidebar/Sidebar";
import styles from "./Products.module.css";
import PropTypes from "prop-types";

function Products({ products, setData, wishlistCount, setWishlistCount, addTpCartCount, setAddTpCartCount,  isLoggedIn , setIsLoggedIn }) {
  return (
    <>
      <Header 
      wishlistCount={wishlistCount}
        setWishlistCount={setWishlistCount}
        addTpCartCount={addTpCartCount}
        setAddTpCartCount={setAddTpCartCount}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}/>
      <div className={styles.container}>
        <Main products={products} setData={setData} />
        <Sidebar products={products} />
      </div>
      <Footer />
    </>
  );
}

Products.propTypes = {
  products: PropTypes.array,
  setData: PropTypes.func,
  wishlistCount: PropTypes.number,
  setWishlistCount: PropTypes.func,
  addTpCartCount: PropTypes.number,
  setAddTpCartCount: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  setIsLoggedIn: PropTypes.func,
};
export default Products;
