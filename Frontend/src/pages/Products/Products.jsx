import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import Main from "../../compenents/Main/Main";
import Sidebar from "../../compenents/Sidebar/Sidebar";
import styles from "./Products.module.css";
import PropTypes from "prop-types";

function Products({ dispatch, state }) {
  return (
    <>
      <Header state={state} dispatch={dispatch} />
      <div className={styles.container}>
        <Main state={state} dispatch={dispatch} />
        <Sidebar state={state} />
      </div>
      <Footer />
    </>
  );
}

Products.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};
export default Products;
