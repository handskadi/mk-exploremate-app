import styles from "./NotificationPanel.module.css";
import PropTypes from "prop-types";

function NotificationPanel({ isOpen }) {
  return (
    <div
      className={styles.notificationPanel}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className={styles.notificationHeader}>
        <h3>Products</h3>
      </div>
      <div className={styles.noticationList}>
        <div className={styles.notificationItem}>
          <img src="http://localhost:5173/images/tours/image2.jpg" alt="#" />
          <div className={styles.noticationText}>
            <h3>Marrakech to Merzouga </h3>
          </div>
          <div className={styles.notificationActionButtons}>
            <button>x</button>
          </div>
        </div>
      </div>
    </div>
  );
}
NotificationPanel.propTypes = {
  isOpen: PropTypes.bool,
};

export default NotificationPanel;
