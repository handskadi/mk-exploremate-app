import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import Main from "../../compenents/Main/Main";
import Sidebar from "../../compenents/Sidebar/Sidebar";
import styles from "./Products.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Products({ dispatch, state }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isLoggedIn) {
      navigate("/login");
    }
  }, [state.isLoggedIn, navigate]);

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
