import Footer from "../../compenents/Footer/Footer";
import Header from "../../compenents/Header/Header";
import PropTypes from "prop-types";
import styles from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";
import MkIcon from "../../compenents/MkIcon/MkIcon";

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
          <h2></h2>
          <div className={styles.suceessAdd}>
            <MkIcon height="50" width="50" />

            {/* <svg
              width="800px"
              height="800px"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{"dashboard-remove"}</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="invisible_box" data-name="invisible box">
                  <rect width={48} height={48} fill="none" />
                </g>
                <g id="icons_Q2" data-name="icons Q2">
                  <path d="M45,10h0a2,2,0,0,1-2,2H33a2,2,0,0,1-2-2h0a2,2,0,0,1,2-2H43A2,2,0,0,1,45,10Z" />
                  <g>
                    <path d="M26,19.4V14a2,2,0,0,0-4,0v5.4A5.1,5.1,0,0,0,19,24a5,5,0,0,0,10,0A5.1,5.1,0,0,0,26,19.4Z" />
                    <path d="M24,2h2V8a2,2,0,0,1-4,0V6.1a19.6,19.6,0,0,0-4.9,1.3A14.5,14.5,0,0,0,12.8,10l1.3,1.3a1.9,1.9,0,0,1,0,2.8,1.9,1.9,0,0,1-2.8,0L10,12.8A17.7,17.7,0,0,0,6.1,22H8a2,2,0,0,1,0,4H6.1a18.4,18.4,0,0,0,3.7,9l1.5-1.4a2,2,0,0,1,2.8,2.8l-3,3h0a1.9,1.9,0,0,1-2.8,0A21.6,21.6,0,0,1,2,24,22.1,22.1,0,0,1,24,2Z" />
                    <path d="M46,24a21.8,21.8,0,0,1-6.3,15.4,2,2,0,0,1-2.7.1l-3.1-3.1a2,2,0,1,1,2.8-2.8L38.2,35a18.4,18.4,0,0,0,3.7-9H40a2,2,0,0,1,0-4h5.9A13.4,13.4,0,0,1,46,24Z" />
                  </g>
                </g>
              </g>

            </svg> */}

            {/* Sytle svg 
            
element.style {
    width: 40px;
    height: 40px;
    fill: #115152;
    background: #f3fff6;
    border-radius: 50%;
    padding: 5px;
} */}
            <div>
              <h3>Dashboard Overview</h3>
              <span>Welcome back!</span>
            </div>
          </div>
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
