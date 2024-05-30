import Header from "../../compenents/Header/Header";
import Footer from "../../compenents/Footer/Footer";
import Main from "../../compenents/Main/Main";
import Sidebar from "../../compenents/Sidebar/Sidebar";
import styles from "./Products.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Products({ dispatch, state }) {
  const navigate = useNavigate();
  if (!state.isLoggedIn) {
    navigate("/login");
  }

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
