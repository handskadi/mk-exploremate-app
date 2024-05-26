import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";
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

function MainNav() {
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
            </button>
            <button>
              <FontAwesomeIcon icon={faBasketShopping} />
              <span>1</span>
            </button>
            <button>
              <FontAwesomeIcon icon={faBell} />
              <span>9+</span>
            </button>
          </li>
          <li>Updates</li>
          <li>
            <NavLink to="/login">Logout</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MainNav;
