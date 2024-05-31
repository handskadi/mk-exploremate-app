import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./Main.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

function Main({ dispatch, state }) {
  const { tours, loggedInUser } = state;
  const navigate = useNavigate();

  const goToAddProduct = () => {
    navigate("/add-product");
  };

  return (
    <main className={styles.main}>
      <article>
        <div className={styles.filter}>
          <select>
            <option value="all">All Products</option>
            <option value="">Active</option>
            <option value="">Inactive</option>
            <option value="">Pause</option>
          </select>
        </div>

        <header className={styles.mainHeader}>
          <h1>Products</h1>
          <Button type="O" onClick={goToAddProduct}>
            Create <span className={styles.creatProductButton}> product</span>{" "}
            <FontAwesomeIcon icon={faSquarePlus} />
          </Button>
        </header>

        {tours.map((product, index) => {
          if (product.userID === loggedInUser.id)
            return (
              <ProductItem product={product} dispatch={dispatch} key={index} />
            );
        })}
      </article>
    </main>
  );
}

Main.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};

export default Main;
