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
import { useState } from "react";

function MainNav({ wishlistCount, addTpCartCount, isLoggedIn, setIsLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleLogout(){
    setIsLoggedIn(false)
  }
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
          {isLoggedIn && (
            <>
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
            </>
          )}
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
          {!isLoggedIn ?  
          <li>
            <NavLink to="/login">
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faRightFromBracket} />
              </span>
              <span className={styles.text}>Login</span>
            </NavLink>
          </li>
          : <li><button onClick={handleLogout} className={styles.logoutBtn}>Logout</button></li> }
        </ul>
      </nav>
      <div className={styles.rightNav}>
        <ul>
          <li className={styles.shoppingTools}>
            <button
              onClick={() => {
                if (wishlistCount > 0) setIsOpen(!isOpen);
              }}
            >
              <FontAwesomeIcon icon={faHeart} />
              {wishlistCount > 0 && <span>{wishlistCount}</span>}
              <NotificationPanel isOpen={isOpen} setIsOpen={setIsOpen} />
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
          {/* <li>
            <NavLink to="/login">{isLoggedIn ? "logout" : "Login"}</NavLink>
          </li> */}
        </ul>
      </div>
    </>
  );
}

MainNav.propTypes = {
  wishlistCount: PropTypes.number,
  addTpCartCount: PropTypes.number,
  isLoggedIn: PropTypes.bool,
  setIsLoggedIn: PropTypes.func,
};
export default MainNav;
