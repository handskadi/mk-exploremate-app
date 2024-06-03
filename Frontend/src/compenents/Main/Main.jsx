import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./Main.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Main({ dispatch, state }) {
  const { tours, loggedInUser } = state;
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const goToAddProduct = () => {
    navigate("/add-product");
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTours = tours.filter((tour) => {
    if (filter === "all") return true;
    return tour.status === filter;
  });

  return (
    <main className={styles.main}>
      <article>
        <div className={styles.filter}>
          <select value={filter} onChange={handleFilterChange}>
            <option value="all">All Products</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pause">Pause</option>
          </select>
        </div>

        <header className={styles.mainHeader}>
          <h1>Products</h1>
          <Button type="O" onClick={goToAddProduct}>
            Create <span className={styles.creatProductButton}> product</span>{" "}
            <FontAwesomeIcon icon={faSquarePlus} />
          </Button>
        </header>

        {filteredTours.map((product, index) => {
          if (product.userID == loggedInUser.id)
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
