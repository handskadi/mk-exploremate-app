import Footer from "../../compenents/Footer/Footer";
import Header from "../../compenents/Header/Header";
import PropTypes from "prop-types";
import styles from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";
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

const countProductsByStatus = (products, status, loggedInUser) => {
  const filteredProducts = products.filter((product) => {
    const matchesStatus = product.status == status;
    const matchesUser = product.userID == loggedInUser.id;

    return matchesStatus && matchesUser;
  });

  console.log("Filtered Products:", filteredProducts);
  return filteredProducts.length;
};

// const countProductsByStatus = (products, status, loggedInUser) => {
//   return products.filter(
//     (product) => product.status === status && product.userID === loggedInUser.id
//   ).length;
// };

Dashboard.propTypes = {
  dispatch: PropTypes.func,
  state: PropTypes.object,
};

export default Dashboard;
