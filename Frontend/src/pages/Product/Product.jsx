import Footer from "../../compenents/Footer/Footer";
import Header from "../../compenents/Header/Header";
import styles from "./Product.module.css";
import PropTypes from "prop-types";

function Product({ dispatch, state }) {
  return (
    <>
      <Header state={state} dispatch={dispatch} />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.photos}>1</div>
          <div className={styles.photo}>2</div>
          <div className={styles.bookingWidget}>3</div>
        </div>
        <div className={styles.detainSection}>
          <span>Info 1</span>
          <span>Info 2</span>
          <span>Info 3</span>
          <span>Info 4</span>
        </div>
        <div className={styles.contentSection}>
          <div>
            <h3>My Tour Title</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vestibulum nunc ac tortor hendrerit ultricies. Aenean lobortis,
              tellus vel placerat varius, nisi est elementum lacus, quis
              tincidunt tellus est nec elit.
            </p>
          </div>
          <div>
            <h3>What is included?</h3>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
          <div>
            <h3>Tour Details</h3>
            <ul>
              <li>
                <h4>Day 1: Marrakech</h4>
                <p>
                  tellus vel placerat varius, nisi est elementum lacus, quis
                  tincidunt tellus est nec elit.
                </p>
              </li>
              <li>
                <h4>Day 2: Casablanca</h4>
                <p>
                  tellus vel placerat varius, nisi est elementum lacus, quis
                  tincidunt tellus est nec elit.
                </p>
              </li>
              <li>
                <h4>Day 3: Rabat</h4>
                <p>
                  tellus vel placerat varius, nisi est elementum lacus, quis
                  tincidunt tellus est nec elit.
                </p>
              </li>
            </ul>
          </div>
          <div>Additional Info</div>
        </div>
        <div className={styles.relatedProducts}>Related /similar Products</div>
      </div>
      <Footer />
    </>
  );
}

Product.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};

export default Product;
