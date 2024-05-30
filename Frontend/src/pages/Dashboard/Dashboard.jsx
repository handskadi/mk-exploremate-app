import Footer from "../../compenents/Footer/Footer";
import Header from "../../compenents/Header/Header";
import PropTypes from "prop-types";
import styles from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";

function Dashboard({ dispatch, state }) {
  const navigate = useNavigate();
  if (!state.isLoggedIn) {
    navigate("/login");
  }
  return (
    <>
      <Header state={state} dispatch={dispatch} />
      <div className={styles.container}>
        <div className={styles.dashHeader}>
          <h2>Dashboard Overview</h2>
          <p>Welcome back! Here s an overview of your dashboard.</p>
        </div>

        {/* <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Quick Actions</h2>
          <div className={styles.actions}>
            <Link to="/create-tour" className={styles.actionButton}>
              Create Tour
            </Link>
            <Link to="/create-accommodation" className={styles.actionButton}>
              Create Accommodation
            </Link>
            <Link to="/list-cars" className={styles.actionButton}>
              List Cars for Rental
            </Link>
            <Link to="/create-experience" className={styles.actionButton}>
              Create Travel Experience
            </Link>
            <Link to="/manage-products" className={styles.actionButton}>
              Manage Products
            </Link>
          </div>
        </div> */}
        <div className={styles.dashPanels}>
          <div className={styles.dashPanel}>
            <h3>Statistics</h3>
            <div className={styles.statCards}>
              <div className={styles.statCard}>
                <p className={styles.statValue}>12</p>
                <p className={styles.statLabel}>Active Products</p>
              </div>
              <div className={styles.statCard}>
                <p className={styles.statValue}>3</p>
                <p className={styles.statLabel}>Inactive Products</p>
              </div>
              <div className={styles.statCard}>
                <p className={styles.statValue}>5</p>
                <p className={styles.statLabel}>Paused Products</p>
              </div>
            </div>
          </div>
          <div className={styles.dashPanel}>
            <h3>Recent Activities</h3>
            <ul className={styles.activityList}>
              <li>User A booked a tour</li>
              <li>User B left a review</li>
              <li>User C signed up</li>
            </ul>
          </div>
          <div className={styles.dashPanel}>
            <h3>Messages</h3>
            <p className={styles.messageInfo}>You have 5 new messages</p>
            <button className={styles.viewButton}>View Messages</button>
          </div>
          <div className={styles.dashPanel}>
            <h3>Notifications</h3>
            <p className={styles.notificationInfo}>3 new notifications</p>
            <button className={styles.viewButton}>View Notifications</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

Dashboard.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};
export default Dashboard;
