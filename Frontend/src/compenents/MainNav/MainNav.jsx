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
  faSliders,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import NotificationPanel from "../NotificationPanel/NotificationPanel";
import { useState } from "react";

function MainNav({ dispatch, state }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const {
    isLoggedIn,
    addToCartCount,
    wishListCount,
    loggedInUser,
    productsInWishList,
  } = state;
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

          <li>
            {!isLoggedIn && (
              <NavLink to="/login">
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </span>
                <span className={styles.text}>Login</span>
              </NavLink>
            )}
            {isLoggedIn && (
              <div className={styles.loginContainer}>
                <div
                  className={styles.loginActionsBtn}
                  style={{ display: isUserMenuOpen ? "block" : "none" }}
                >
                  <button onClick={() => dispatch({ type: "logout" })}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    Logout
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faSliders} />
                    Setting
                  </button>
                </div>
                <img
                  src={loggedInUser.userImage}
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                />
              </div>
            )}
          </li>
        </ul>
      </nav>
      <div className={styles.rightNav}>
        <ul>
          <li className={styles.shoppingTools}>
            <button
              onClick={() => {
                if (wishListCount > 0) setIsOpen(!isOpen);
              }}
            >
              <FontAwesomeIcon icon={faHeart} />
              {productsInWishList.length > 0 && (
                <span>{productsInWishList.length}</span>
              )}
              <NotificationPanel
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                dispatch={dispatch}
                state={state}
              />
            </button>
            <button>
              <FontAwesomeIcon icon={faBasketShopping} />
              {addToCartCount > 0 && <span>{addToCartCount}</span>}
            </button>
            <button>
              <FontAwesomeIcon icon={faBell} />
              <span>9+</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

MainNav.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
};
export default MainNav;
