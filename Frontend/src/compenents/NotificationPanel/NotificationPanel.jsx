import  styles from "./NotificationPanel.module.css"

function NotificationPanel() {
  return (
    <div className={styles.notificationPanel}>
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
  )
}

export default NotificationPanel