import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faBell,
  faBoxes,
  faCircleInfo,
  faDashboard,
  faHome,
  faRightFromBracket,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import NotificationPanel from "../NotificationPanel/NotificationPanel";

function MainNav({ wishlistCount, addTpCartCount }) {
  return (
    <>
      <nav className={styles.mainNav}>
        <ul>
          <li>
            <NavLink to="/">
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span className={styles.text}>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faDashboard} />
              </span>
              <span className={styles.text}>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faBoxes} />
              </span>
              <span className={styles.text}> Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faCircleInfo} />
              </span>
              <span className={styles.text}>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className={styles.text}>Contact</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/login">
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faRightFromBracket} />
              </span>
              <span className={styles.text}>logout</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.rightNav}>
        <ul>
          <li className={styles.shoppingTools}>
            <button>
              <FontAwesomeIcon icon={faHeart} />
              {wishlistCount > 0 && <span>{wishlistCount}</span>}
              <NotificationPanel />
            </button>
            <button>
              <FontAwesomeIcon icon={faBasketShopping} />
              {addTpCartCount > 0 && <span>{addTpCartCount}</span>}
            </button>
            <button>
              <FontAwesomeIcon icon={faBell} />
              <span>9+</span>
            </button>
          </li>
          <li>
            <NavLink to="/login">Logout</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

MainNav.propTypes = {
  wishlistCount: PropTypes.number,
  addTpCartCount: PropTypes.number,
};
export default MainNav;
