import styles from "./NotificationPanel.module.css";
import PropTypes from "prop-types";

function NotificationPanel({ isOpen, state, dispatch }) {
  const { productsInWishList } = state;

  return (
    <div
      className={styles.notificationPanel}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className={styles.notificationHeader}>
        <h3>Products</h3>
      </div>
      {productsInWishList.map((product) => {
        return (
          <div className={styles.noticationList} key={product.code}>
            <div className={styles.notificationItem}>
              <img src={product.image} alt="#" />
              <div className={styles.noticationText}>
                <h3>{product.title}</h3>
                <p>
                  <strong>Code:</strong>
                  {product.code}
                </p>
              </div>
              <div className={styles.notificationActionButtons}>
                <div
                  className={styles.closeBtn}
                  onClick={() =>
                    dispatch({
                      type: "productToRemovedFromWishList",
                      payload: product,
                    })
                  }
                  title="Remove from Wish list"
                >
                  x
                </div>
                <div className={styles.notifAddToCartBtn} title="Add to Cart">
                  {" "}
                  +
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
NotificationPanel.propTypes = {
  isOpen: PropTypes.bool,
  state: PropTypes.object,
  dispatch: PropTypes.func,
};

export default NotificationPanel;
