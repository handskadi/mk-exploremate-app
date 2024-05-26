import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./Main.module.css";
import PropTypes from "prop-types";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

function Main({ products }) {
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
          <Button type="O">
            {" "}
            create{" "}
            <span className={styles.creatProductButton}>new product</span>{" "}
            <FontAwesomeIcon icon={faSquarePlus} />
          </Button>
        </header>

        {products.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </article>
    </main>
  );
}

Main.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      isPrivateTour: PropTypes.bool.isRequired,
      rate: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Main;
