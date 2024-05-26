import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import Main from "../../compenents/Main/Main";
import Sidebar from "../../compenents/Sidebar/Sidebar";
import styles from "./Products.module.css";
import PropTypes from "prop-types";

function Products({ products }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Main products={products} />
        <Sidebar products={products} />
      </div>
      <Footer />
    </>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
};
export default Products;
