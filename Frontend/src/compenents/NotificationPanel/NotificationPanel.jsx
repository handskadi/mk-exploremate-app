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
            <p>
              <strong>Code:</strong> 2MK3456
            </p>
          </div>
          <div className={styles.notificationActionButtons}>
            <div className={styles.closeBtn}>x</div>
          </div>
        </div>
        <div className={styles.notificationItem}>
          <img src="http://localhost:5173/images/tours/image2.jpg" alt="#" />
          <div className={styles.noticationText}>
            <h3>Marrakech to Merzouga </h3>
            <p>
              <strong>Code:</strong> 2MK3456
            </p>
          </div>
          <div className={styles.notificationActionButtons}>
            <div
              className={styles.closeBtn}
              onClick={() => {
                alert("Close me");
              }}
            >
              x
            </div>
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
