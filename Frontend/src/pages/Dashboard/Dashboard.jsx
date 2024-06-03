import Footer from "../../compenents/Footer/Footer";
import Header from "../../compenents/Header/Header";
import PropTypes from "prop-types";
import styles from "./Dashboard.module.css";
import { Link, useNavigate } from "react-router-dom";
import MkIcon from "../../compenents/MkIcon/MkIcon";
import { useEffect } from "react";

function Dashboard({ dispatch, state }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isLoggedIn) {
      navigate("/login");
    }
  }, [state.isLoggedIn, navigate]);
  if (!state.isLoggedIn) return null;

  const { tours, loggedInUser } = state;
  const date = Date();
  return (
    <>
      <Header state={state} dispatch={dispatch} />
      <div className={styles.container}>
        <div className={styles.dashHeader}>
          <h2></h2>
          <div className={styles.suceessAdd}>
            <MkIcon height="50" width="50" />

            <div>
              <h3>Dashboard Overview</h3>
              <span>Welcome back, {loggedInUser.accountName}!</span>
            </div>
          </div>
        </div>

        <div className={styles.dashPanels}>
          <div className={styles.dashPanel}>
            <h3>Statistics</h3>
            <div className={styles.statCards}>
              <div className={styles.statCard}>
                <p className={styles.statValue}>
                  {countProductsByStatus(tours, "active", loggedInUser)}
                </p>
                <p className={styles.statLabel}>Active Products</p>
              </div>
              <div className={styles.statCard}>
                <p className={styles.statValue}>
                  {countProductsByStatus(tours, "inactive", loggedInUser)}
                </p>
                <p className={styles.statLabel}>Inactive Products</p>
              </div>
              <div className={styles.statCard}>
                <p className={styles.statValue}>
                  {countProductsByStatus(tours, "pause", loggedInUser)}
                </p>
                <p className={styles.statLabel}>Paused Products</p>
              </div>
            </div>
          </div>

          <div className={styles.dashPanel}>
            <div className={styles.section}>
              <h3>Quick Actions</h3>
              <div className={styles.actions}>
                <Link to="/add-product" className={styles.actionButton}>
                  Create New Product
                </Link>
                <Link to="/products" className={styles.actionButton}>
                  Manage Your Listings
                </Link>
                <Link to="/all-products" className={styles.actionButton}>
                  View all products
                </Link>
                <Link to="/" className={styles.actionButton}>
                  Bookings
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.dashPanel}>
            <h3>Recent Activities</h3>
            <ul className={styles.activityList}>
              <li>
                <strong>Current Session: </strong> {date}
              </li>
              <li>
                <strong>Last Login:</strong> {loggedInUser.lastLogin}
              </li>
              <li>
                <strong>Account Created at:</strong> {loggedInUser.createdAt}
              </li>
            </ul>
          </div>
          {/* <div className={styles.dashPanel}>
            <h3>Notifications</h3>
            <p className={styles.notificationInfo}>3 new notifications</p>
            <button className={styles.viewButton}>View Notifications</button>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

const countProductsByStatus = (products, status, loggedInUser) => {
  const filteredProducts = products.filter((product) => {
    const matchesStatus = product.status == status;
    const matchesUser = product.userID == loggedInUser.id;

    return matchesStatus && matchesUser;
  });

  return filteredProducts.length;
};

Dashboard.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};

export default Dashboard;
